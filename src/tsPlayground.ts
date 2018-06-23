
// for categoryHierarchy.ts
// REMEMBER TO EXPORT

const categoryHierarchy = {
    'MEDICINE': {
        'DERMATOLOGY': {
            'DERMATOLOGY SUBCAT 1': {},
            'DERMATOLOGY SUBCAT 2': {},
        },
        'CHOLESTEROL': {},
        'CARDIOTHERAPY': {},
        'ANTICOAGULANT': {},
        'GASTRIC HEALTH': {},
        'WEIGHT CONTROLH': {},
        'INTESTINE HEALTH': {},
        'HYPERTENSION': {}
    }
}

// for sharedTypes
// REMEMBER TO EXPORT

type MedicineSubcategoryName = keyof typeof categoryHierarchy['MEDICINE']
