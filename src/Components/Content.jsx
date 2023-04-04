import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'PDF document', code: 'PDF' },
        { name: 'Excel file', code: 'XLS' },
        { name: 'Text file', code: 'TXT' },
      
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select type of document       " className="w-full md:w-14rem" />
        </div>
    )
}