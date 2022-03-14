import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Singin from './pages/Signin';

export default function App() {
  return (
    <>
      <Singin/>
      <StatusBar style="light" />
    </>
  );
}