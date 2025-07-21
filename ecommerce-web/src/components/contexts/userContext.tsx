import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  cards: CreditCard[];
}

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

interface CreditCard {
  id: string;
  lastFour: string;
  brand: string;
  expiryDate: string;
  isDefault: boolean;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  addCard: (card: Omit<CreditCard, 'id'>) => void;
  removeCard: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser({
      id: '1',
      name: 'João Silva',
      email: email,
      phone: '(11) 99999-9999',
      addresses: [
        {
          id: '1',
          street: 'Rua das Flores, 123',
          city: 'São Paulo',
          state: 'SP',
          zipCode: '01234-567',
          isDefault: true
        }
      ],
      cards: [
        {
          id: '1',
          lastFour: '1234',
          brand: 'Visa',
          expiryDate: '12/25',
          isDefault: true
        }
      ]
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser({
      id: '1',
      name: name,
      email: email,
      addresses: [],
      cards: []
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    setUser(prev => prev ? {
      ...prev,
      addresses: [...prev.addresses, { ...address, id: Date.now().toString() }]
    } : null);
  };

  const removeAddress = (id: string) => {
    setUser(prev => prev ? {
      ...prev,
      addresses: prev.addresses.filter(addr => addr.id !== id)
    } : null);
  };

  const addCard = (card: Omit<CreditCard, 'id'>) => {
    setUser(prev => prev ? {
      ...prev,
      cards: [...prev.cards, { ...card, id: Date.now().toString() }]
    } : null);
  };

  const removeCard = (id: string) => {
    setUser(prev => prev ? {
      ...prev,
      cards: prev.cards.filter(card => card.id !== id)
    } : null);
  };

  return (
    <UserContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      addAddress,
      removeAddress,
      addCard,
      removeCard
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};