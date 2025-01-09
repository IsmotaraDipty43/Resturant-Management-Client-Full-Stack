import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiospublic = useAxiosPublic();
  const { data: menu = [], isPending: loading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiospublic.get('/menu');
      return res.data;
    }
  });

  return [menu, loading, refetch];  // Fixed the typo here
};

export default useMenu;
