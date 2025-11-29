import React from 'react';

export interface ServiceSection {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}