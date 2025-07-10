import React from 'react';
import { Slider } from './Slider';
import { Outlet } from 'react-router-dom';
import './App.css'; // if you need styles here

export function AuthLayout() {
  return (
    <>
      <div className='RadioAndPageContainer'>
      <Slider />
      <div className='pageContainer'>
        <Outlet />
      </div>
    </div>

    </>
  );
}