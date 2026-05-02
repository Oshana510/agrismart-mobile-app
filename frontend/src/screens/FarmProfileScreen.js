import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  ActivityIndicator,
  ScrollView,
  Linking,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { landService, authService } from '../services/api';

export default function FarmProfileScreen() {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '' });
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [lands, setLands] = useState([]);
  const [totalArea, setTotalArea] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    location: '',
    size: { value: '', unit: 'acres' },
    soilDetails: { nitrogen: '', phosphorus: '', potassium: '', ph: '' },
    soilType: 'other',
    status: 'active',
    mapLink: '',
  });

  const [mapPickerVisible, setMapPickerVisible] = useState(false);
  const [pickedLocation, setPickedLocation] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [profileRes, landsRes] = await Promise.all([
        authService.getMe(),
        landService.getAll(),
      ]);

      setProfile({
        name: profileRes.data.name || '',
        email: profileRes.data.email || '',
        phone: profileRes.data.phone || '',
      });

      const fetchedLands = landsRes.data || [];
      setLands(fetchedLands);

      const total = fetchedLands.reduce((sum, land) => sum + (land.size?.value || 0), 0);
      setTotalArea(total);

    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      await authService.updateProfile(profile);
      Alert.alert('Success', 'Profile updated');
      fetchData();
    } catch {
      Alert.alert('Error', 'Update failed');
    }
  };

  const updatePassword = async () => {
    try {
      await authService.updatePassword(passwordForm);
      Alert.alert('Success', 'Password updated');
      setShowPasswordModal(false);
    } catch {
      Alert.alert('Error', 'Update failed');
    }
  };

  const createLand = async () => {
    try {
      await landService.create({
        ...formData,
        size: { value: parseFloat(formData.size.value) || 0, unit: 'acres' },
      });
      setModalVisible(false);
      fetchData();
    } catch {
      Alert.alert('Error', 'Create failed');
    }
  };

  const updateLand = async () => {
    try {
      await landService.update(editingItem._id, formData);
      setModalVisible(false);
      fetchData();
    } catch {
      Alert.alert('Error', 'Update failed');
    }
  };

  const deleteLand = async (id) => {
    try {
      await landService.delete(id);
      fetchData();
    } catch {
      Alert.alert('Error', 'Delete failed');
    }
  };

  const openMap = (link) => {
    if (!link) return;
    Linking.openURL(`https://maps.google.com/?q=${link}`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e7d32" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        <TouchableOpacity onPress={() => setActiveTab('profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('lands')}>
          <Text>Lands</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'profile' ? (
        <ScrollView>
          <Text>Total Plots: {lands.length}</Text>
          <Text>Total Acres: {totalArea}</Text>

          <TextInput value={profile.name} onChangeText={(t) => setProfile({ ...profile, name: t })} />
          <TextInput value={profile.email} onChangeText={(t) => setProfile({ ...profile, email: t })} />
          <TextInput value={profile.phone} onChangeText={(t) => setProfile({ ...profile, phone: t })} />

          <TouchableOpacity onPress={updateProfile}>
            <Text>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={lands}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.location}</Text>
              <Text>{item.size?.value} acres</Text>

              <TouchableOpacity onPress={() => openMap(item.mapLink)}>
                <Text>Open Map</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteLand(item._id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});