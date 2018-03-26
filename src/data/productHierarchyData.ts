type DermatologySubcategoryName = 'All product groups' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type DermatologySubcategories = {
      [K in DermatologySubcategoryName]: {
            displayName: K,
            children: null,
      }
}

type MedicineSubCategoryName = 'All product groups' | 'DERMATOLOGY' | 'GASTRIC HEALTH' | 'INTESTINE HEALTH' | 'CHOLESTEROL' | 'CARDIOTHERAPY' | 'ANTICOAGULANT' | 'WEIGHT CONTROL' | 'HYPERTENSION'
type MedicineSubcategories = {
      [K in MedicineSubCategoryName]: {
            displayName: K,
            children: null | DermatologySubcategories,
      }
}

export const medicineSubcategories: MedicineSubcategories = {
      ['All product groups']: {
            displayName: 'All product groups',
            children: null
      },
      ['DERMATOLOGY']: {
            displayName: 'DERMATOLOGY',
            children: {
                  ['All product groups']: {
                        displayName: 'All product groups',
                        children: null
                  },
                  ['A']: {
                        displayName: 'A',
                        children: null
                  },
                  ['B']: {
                        displayName: 'B',
                        children: null
                  },
                  ['C']: {
                        displayName: 'C',
                        children: null
                  },
                  ['D']: {
                        displayName: 'D',
                        children: null
                  },
                  ['E']: {
                        displayName: 'E',
                        children: null
                  },
                  ['F']: {
                        displayName: 'F',
                        children: null
                  },
                  ['G']: {
                        displayName: 'G',
                        children: null
                  },
                  ['H']: {
                        displayName: 'H',
                        children: null
                  },
            }
      },
      ['GASTRIC HEALTH']: {
            displayName: 'GASTRIC HEALTH',
            children: null
      },
      ['INTESTINE HEALTH']: {
            displayName: 'INTESTINE HEALTH',
            children: null
      },
      ['CHOLESTEROL']: {
            displayName: 'CHOLESTEROL',
            children: null
      },
      ['CARDIOTHERAPY']: {
            displayName: 'CARDIOTHERAPY',
            children: null
      },
      ['ANTICOAGULANT']: {
            displayName: 'ANTICOAGULANT',
            children: null
      },
      ['WEIGHT CONTROL']: {
            displayName: 'WEIGHT CONTROL',
            children: null
      },
      ['HYPERTENSION']: {
            displayName: 'HYPERTENSION',
            children: null
      },
}
