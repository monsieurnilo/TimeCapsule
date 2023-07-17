export const tagOptions = [
  {
    value: 'tous',
    text: 'Toutes',
  },
  {
    value: 'Préhistoire',
    text: 'Préhistoire',
  },
  {
    value: 'Antiquité',
    text: 'Antiquité',
  },
  {
    value: 'Moyen-Âge',
    text: 'Moyen-Âge',
  },
  {
    value: 'Moderne',
    text: 'Moderne',
  },
  {
    value: 'Contemporain',
    text: 'Contemporain',
  },
];

export const getRandom = (max: number) => {
  return Math.floor(Math.random() * max);
};
