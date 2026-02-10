export const categories = [
  { id: 0, name: "Excel" },
  { id: 1, name: "Word" },
  { id: 2, name: "Гарны хослол" },
  { id: 3, name: "PowerPoint" },
  { id: 4, name: "Аюулгүй байдал" },
  { id: 5, name: "Компьютер" },
  { id: 6, name: "Ёс зүй" },
  { id: 7, name: "Интернэт" },
];

export const questions = [
  {
    id: 1,
    category: 0,
    level: 1,
    label: "A$1 гэсэн хаяглал хуулахад хэрхэн өөрчлөгдөх вэ?",
    answers: [
      { label: "Мөр өөрчлөгдөнө, багана өөрчлөгдөхгүй", answerYn: true },
      {
        label: "Багана (A) өөрчлөгдөхгүй, мөр (1) өөрчлөгдөнө",
        answerYn: false,
      },
      { label: "Хоёулаа өөрчлөгдөнө", answerYn: false },
      { label: "Хоёулаа өөрчлөгдөхгүй", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: 'Word-д "Superscript" ($X^2$) бичих товчлол?',
    answers: [
      { label: "Ctrl + Shift + (+)", answerYn: true },
      { label: "Ctrl + (=)", answerYn: false },
      { label: "Alt + Shift + (+)", answerYn: false },
      { label: "Ctrl + S", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Файлын нэрийг өөрчлөх (Rename) товчлуур?",
    answers: [
      { label: "F1", answerYn: false },
      { label: "F2", answerYn: true },
      { label: "F3", answerYn: false },
      { label: "F5", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: "1 Byte нь хэдэн Bit-тэй тэнцүү вэ?",
    answers: [
      { label: "4", answerYn: false },
      { label: "8", answerYn: true },
      { label: "16", answerYn: false },
      { label: "32", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: '"Keylogger" гэж ямар төрлийн програм бэ?',
    answers: [
      { label: "Вирус устгадаг", answerYn: false },
      {
        label:
          "Гарын товчлуур дээр дарсан бүх үйлдлийг бичиж авдаг тагнуулын програм",
        answerYn: true,
      },
      { label: "Файл шахдаг", answerYn: false },
      { label: "Дэлгэц амраагч", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: "URL гэдэг үгний товчлол?",
    answers: [
      { label: "Universal Resource Line", answerYn: false },
      { label: "Uniform Resource Locator", answerYn: true },
      { label: "Unified Real Link", answerYn: false },
      { label: "Ultra Rapid Link", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label: 'Слайдыг "Hide Slide" хийх үед юу болох вэ?',
    answers: [
      { label: "Слайд устана", answerYn: false },
      {
        label: "Slide Show хийх үед тухайн слайд алгасаж харагдахгүй",
        answerYn: true,
      },
      { label: "Зөвхөн засварлах үед харагдахгүй", answerYn: false },
      { label: "Слайд хар өнгөтэй болно", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label:
      "Excel-д өгөгдлийг баганан диаграмм (Column Chart) болгох хурдан товчлол?",
    answers: [
      { label: "F1", answerYn: false },
      { label: "Alt + F1", answerYn: true },
      { label: "Ctrl + F1", answerYn: false },
      { label: "Shift + F1", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Chrome дээр татсан файлуудын (Downloads) цонхыг нээх товчлол?",
    answers: [
      { label: "Ctrl + J", answerYn: true },
      { label: "Ctrl + H", answerYn: false },
      { label: "Ctrl + T", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: '"Netiquette" гэж юу вэ?',
    answers: [
      { label: "Сүлжээний хурд", answerYn: false },
      {
        label: "Интернэт орчинд биеэ зөв авч явах соёл, дүрэм",
        answerYn: true,
      },
      { label: "Вэб сайтын загвар", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label: "GPU гэж юу вэ?",
    answers: [
      { label: "Төв процессор", answerYn: false },
      { label: "График процессор (Дүрс боловсруулах)", answerYn: true },
      { label: "Санах ой", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label: '"Landscape" болон "Portrait" нь хуудасны юуг заадаг вэ?',
    answers: [
      { label: "Хэмжээ", answerYn: false },
      { label: "Чиглэл (Orientation)", answerYn: true },
      { label: "Өнгө", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: "=AVERAGE(10, 20, 30) функцийн хариу?",
    answers: [
      { label: "60", answerYn: false },
      { label: "30", answerYn: false },
      { label: "20", answerYn: true },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: '"Biometric Authentication"-д юу орох вэ?',
    answers: [
      { label: "Нууц үг", answerYn: false },
      { label: "Хурууны хээ, царай таних", answerYn: true },
      { label: "Pattern зурах", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: '"Bandwidth" гэж юуг хэлэх вэ?',
    answers: [
      { label: "Утасгүй сүлжээний нэр", answerYn: false },
      {
        label:
          "Сүлжээгээр нэгж хугацаанд дамжуулах өгөгдлийн хэмжээ (Дамжуулах чадамж)",
        answerYn: true,
      },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label:
      'Слайдын арын дэвсгэр зургийг бүх слайдад ижил болгохын тулд "Format Background" цэснээс юу дарах вэ?',
    answers: [
      { label: "Apply to All", answerYn: true },
      { label: "Save", answerYn: false },
    ],
  },
];
