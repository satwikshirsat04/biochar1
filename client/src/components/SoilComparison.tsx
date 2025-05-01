import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SoilComparison: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisonData = [
    { parameter: 'Water Retention', withoutBiochar: '30%', withBiochar: '65%' },
    { parameter: 'Nutrient Retention', withoutBiochar: 'Low', withBiochar: 'High' },
    { parameter: 'Soil Acidity (pH)', withoutBiochar: '5.0-6.0', withBiochar: '6.5-7.5' },
    { parameter: 'Microbial Activity', withoutBiochar: 'Limited', withBiochar: 'Enhanced' },
    { parameter: 'Carbon Sequestration', withoutBiochar: 'Minimal', withBiochar: 'Significant' }
  ];

  return (
    <div className="py-16 bg-biocharSoftGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-biocharGreen text-center mb-8 animate-fade-up duration-700 delay-100">Why Indian Soil Needs Biochar</h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-up">
          Indian soils face challenges like erosion, nutrient depletion, and water scarcity. 
          Biochar offers a sustainable solution by enhancing soil properties. See the difference below:
        </p>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
          <Table>
            <TableHeader>
              <TableRow className="bg-biocharGreen">
                <TableHead className="text-white">Parameter</TableHead>
                <TableHead className="text-white">Without Biochar</TableHead>
                <TableHead className="text-white">With Biochar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-biocharSoftGreen'}>
                  <TableCell className="font-medium">{row.parameter}</TableCell>
                  <TableCell className="text-red-600">{row.withoutBiochar}</TableCell>
                  <TableCell className="text-green-600 font-semibold">{row.withBiochar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            className="btn-primary animate-pulse flex items-center mx-auto"
            onClick={scrollToProducts}
          >
            Transform Your Soil Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SoilComparison;
