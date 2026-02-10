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
    label: '=COUNTIF(A1:A10, "Apple") функц юу хийх вэ?',
    answers: [
      { label: '"Apple" гэсэн үгтэй нүднүүдийг нэмнэ', answerYn: false },
      { label: '"Apple" гэсэн үгтэй нүднүүдийг тоолно', answerYn: true },
      { label: '"Apple"-аас бусад нүдийг тоолно', answerYn: false },
      { label: "Бүх жимсийг тоолно", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label:
      "Нэг хуудсан дээр нэг баганатай болон хоёр баганатай текстийг зэрэг байрлуулахын тулд юу ашиглах вэ?",
    answers: [
      { label: "Page Break", answerYn: false },
      { label: "Section Break (Continuous)", answerYn: true },
      { label: "Text Box", answerYn: false },
      { label: "Table", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Ctrl + Y товчлол юу хийдэг вэ?",
    answers: [
      { label: "Undo (Буцаах)", answerYn: false },
      { label: "Redo (Буцаасныг дахин хийх)", answerYn: true },
      { label: "Cut (Тасдах)", answerYn: false },
      { label: "Paste (Буулгах)", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: 'Дэлгэцийн "Refresh Rate" (Hz) өндөр байх нь юунд сайн бэ?',
    answers: [
      { label: "Өнгөний ялгарал сайжирна", answerYn: false },
      {
        label: "Хөдөлгөөнт дүрс илүү зөөлөн, сарнилтгүй харагдана",
        answerYn: true,
      },
      { label: "Цахилгаан бага зарцуулна", answerYn: false },
      { label: "Нүд өвдөхгүй", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: '"End-to-End Encryption" (E2EE) гэж юу вэ?',
    answers: [
      { label: "Сервер дээр мессеж уншигдана", answerYn: false },
      {
        label: "Зөвхөн илгээгч болон хүлээн авагч л мессежийг унших боломжтой",
        answerYn: true,
      },
      { label: "Мессеж кодлогдохгүй", answerYn: false },
      { label: "Нууц үггүй нэвтрэх", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: "Вэб сайтын хаягт http:// болон https:// хоёрын ялгаа?",
    answers: [
      { label: "Ялгаагүй", answerYn: false },
      { label: "http нь илүү хурдан", answerYn: false },
      {
        label: "https нь өгөгдлийг шифрлэж дамжуулдаг (Secure)",
        answerYn: true,
      },
      { label: "https нь зөвхөн төлбөртэй сайтууд", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label:
      "PowerPoint дээр дүрсүүдийг нэгтгэх, хасах, огтлолцуулах үйлдлийг ямар цэсээр хийдэг вэ?",
    answers: [
      { label: "Group", answerYn: false },
      { label: "Merge Shapes (Union, Combine...)", answerYn: true },
      { label: "Align", answerYn: false },
      { label: "Arrange", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label:
      'Excel дээр эрэмбэлэх (Sort) хийхэд "My data has headers" сонголтыг чагтлахын учир?',
    answers: [
      { label: "Бүх өгөгдлийг эрэмбэлнэ", answerYn: false },
      {
        label: "Эхний мөрийг гарчиг гэж үзээд эрэмбэлэх хэсэгт оруулахгүй",
        answerYn: true,
      },
      { label: "Зөвхөн тоог эрэмбэлнэ", answerYn: false },
      { label: "Өнгөөр эрэмбэлнэ", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Ctrl + W товчлол хөтөч дээр ямар үйлдэл хийдэг вэ?",
    answers: [
      { label: "Бүх цонхыг хаана", answerYn: false },
      { label: "Шинэ цонх нээнэ", answerYn: false },
      { label: "Идэвхтэй байгаа Tab-ыг хаана", answerYn: true },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label:
      "Цахим орчинд бусдыг санаатайгаар доромжлох, заналхийлэх үйлдлийг юу гэдэг вэ?",
    answers: [
      { label: "Trolling", answerYn: false },
      { label: "Cyberbullying", answerYn: true },
      { label: "Spamming", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label:
      'Компьютерийн "Virtual Memory" (Виртуал санах ой) хаана байрладаг вэ?',
    answers: [
      { label: "Hard Disk / SSD дээр", answerYn: true },
      { label: "CPU дотор", answerYn: false },
      { label: "BIOS дотор", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label:
      'Word-д зургийг текстийн ард (Background) оруулахын тулд "Wrap Text" цэснээс юуг сонгох вэ?',
    answers: [
      { label: "Square", answerYn: false },
      { label: "Top and Bottom", answerYn: false },
      { label: "Behind Text", answerYn: true },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: '=SUMIF(A1:A5, ">10") функц юу хийх вэ?',
    answers: [
      { label: "10-аас их утгатай нүднүүдийн нийлбэрийг олно", answerYn: true },
      { label: "Бүх тооны нийлбэрийг олно", answerYn: false },
      { label: "Хамгийн их тоог олно", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label:
      "Таны компьютерийн бүх файлыг шифрлээд, тайлахын тулд мөнгө нэхдэг хортой програм?",
    answers: [
      { label: "Spyware", answerYn: false },
      { label: "Ransomware", answerYn: true },
      { label: "Worm", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: "DNS (Domain Name System)-ийн үндсэн үүрэг юу вэ?",
    answers: [
      { label: "Сайтын хурдыг нэмэх", answerYn: false },
      { label: "Вэб сайтын нэрийг IP хаяг руу хөрвүүлэх", answerYn: true },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label:
      'Илтгэл тавих үед "Black Screen" (Хар дэлгэц) гаргахын тулд ямар товч дардаг вэ?',
    answers: [
      { label: "B", answerYn: true },
      { label: "F5", answerYn: false },
    ],
  },
];
