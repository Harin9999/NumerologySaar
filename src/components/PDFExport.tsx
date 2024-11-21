import React from 'react';
import { Download } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { NumerologyMeanings } from '../types/numerology';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000'
  },
  section: {
    marginBottom: 20
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#8B0000'
  },
  subheading: {
    fontSize: 16,
    marginBottom: 8,
    color: '#4A0404'
  },
  text: {
    fontSize: 14,
    lineHeight: 1.5,
    color: '#2B0000',
    marginBottom: 8
  },
  trait: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 10,
    color: '#4A0404'
  }
});

interface PDFDocumentProps {
  name: string;
  destinyNumber: number;
  lifePathNumber: number;
  meanings: NumerologyMeanings;
}

const NumerologyPDF = ({ name, destinyNumber, lifePathNumber, meanings }: PDFDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Numerology Reading for {name}</Text>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Destiny Number: {destinyNumber}</Text>
        <Text style={styles.subheading}>{meanings[destinyNumber].title}</Text>
        <Text style={styles.text}>{meanings[destinyNumber].preview}</Text>
        <Text style={styles.subheading}>Key Traits:</Text>
        {meanings[destinyNumber].traits.map((trait, index) => (
          <Text key={index} style={styles.trait}>• {trait}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Life Path Number: {lifePathNumber}</Text>
        <Text style={styles.subheading}>{meanings[lifePathNumber].title}</Text>
        <Text style={styles.text}>{meanings[lifePathNumber].preview}</Text>
        <Text style={styles.subheading}>Key Traits:</Text>
        {meanings[lifePathNumber].traits.map((trait, index) => (
          <Text key={index} style={styles.trait}>• {trait}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

interface PDFExportProps {
  name: string;
  destinyNumber: number;
  lifePathNumber: number;
  meanings: NumerologyMeanings;
}

export default function PDFExport({ name, destinyNumber, lifePathNumber, meanings }: PDFExportProps) {
  return (
    <PDFDownloadLink
      document={
        <NumerologyPDF
          name={name}
          destinyNumber={destinyNumber}
          lifePathNumber={lifePathNumber}
          meanings={meanings}
        />
      }
      fileName={`numerology-reading-${name.toLowerCase().replace(/\s+/g, '-')}.pdf`}
    >
      {({ loading }) => (
        <button
          className="flex items-center gap-2 px-4 py-2 bg-royal-primary text-white rounded-lg hover:bg-royal-secondary transition-colors"
          disabled={loading}
        >
          <Download className="w-4 h-4" />
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </button>
      )}
    </PDFDownloadLink>
  );
}