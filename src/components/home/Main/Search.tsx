"use client"

import Button, { ButtonVariant } from '@/components/common/Button';
import React, { useState } from 'react';
import { LuPanelLeft } from "react-icons/lu"

function SearchComponent() {
  
  return (
    <Button icon={LuPanelLeft}>
      Sign In
    </Button>
  );
}

export default SearchComponent;
