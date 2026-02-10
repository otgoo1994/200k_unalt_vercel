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
    label: "=SQRT(64) функцийн үр дүн?",
    answers: [
      { label: "6", answerYn: false },
      { label: "8", answerYn: true },
      { label: "16", answerYn: false },
      { label: "32", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: "Текстийг тодруулах (Bold) товчлол?",
    answers: [
      { label: "Ctrl + B", answerYn: true },
      { label: "Ctrl + I", answerYn: false },
      { label: "Ctrl + U", answerYn: false },
      { label: "Ctrl + D", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Ctrl + Z товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Redo", answerYn: false },
      { label: "Undo (Сүүлийн үйлдлийг буцаах)", answerYn: true },
      { label: "Cut", answerYn: false },
      { label: "Paste", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: '"Extension" (Өргөтгөл) гэж юу вэ?',
    answers: [
      {
        label:
          "Файлын төрлийг тодорхойлдог нэрний ард байх хэсэг (.docx, .jpg)",
        answerYn: true,
      },
      { label: "Файлын хэмжээ", answerYn: false },
      { label: "Файлын зам", answerYn: false },
      { label: "Файлын нэр", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: '"Spam" гэж юу вэ?',
    answers: [
      {
        label: "Хүсээгүй, олон тоогоор ирдэг зар сурталчилгааны и-мэйл",
        answerYn: true,
      },
      { label: "Вирус", answerYn: false },
      { label: "Хэрэгтэй мэдээлэл", answerYn: false },
      { label: "Нууц үг", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: '"Browser History" гэж юу вэ?',
    answers: [
      { label: "Таны зочилсон вэб сайтуудын жагсаалт", answerYn: true },
      { label: "Хөтөчийн тохиргоо", answerYn: false },
      { label: "Хадгалсан нууц үг", answerYn: false },
      { label: "Татсан файлууд", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label: "PowerPoint файлыг PDF болгон хадгалж болох уу?",
    answers: [
      { label: "Болно", answerYn: true },
      { label: "Болохгүй", answerYn: false },
      { label: "Зөвхөн зураг болно", answerYn: false },
      { label: "Зөвхөн текст болно", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label:
      "Нүдэн доторх текстийг босоо, хэвтээ, эсвэл диагональ болгож эргүүлэх тохиргоо?",
    answers: [
      { label: "Orientation", answerYn: true },
      { label: "Wrap Text", answerYn: false },
      { label: "Merge & Center", answerYn: false },
      { label: "Shrink to fit", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Ctrl + C товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Copy", answerYn: true },
      { label: "Cut", answerYn: false },
      { label: "Paste", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: "Хуурамч мэдээ (Fake News) тараах нь дижитал ёс зүйд нийцэх үү?",
    answers: [
      { label: "Үгүй", answerYn: true },
      { label: "Тийм", answerYn: false },
      { label: "Заримдаа", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label: "Компьютерийн дэлгэцийн нягтралыг (Resolution) юугаар хэмждэг вэ?",
    answers: [
      { label: "Pixel", answerYn: true },
      { label: "Hertz", answerYn: false },
      { label: "Byte", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label: "Текстийг налуу (Italic) болгох товчлол?",
    answers: [
      { label: "Ctrl + I", answerYn: true },
      { label: "Ctrl + U", answerYn: false },
      { label: "Ctrl + B", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: "=PRODUCT(5, 4) функцийн үр дүн?",
    answers: [
      { label: "20 (Үржвэр)", answerYn: true },
      { label: "25", answerYn: false },
      { label: "9", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: "Антивирус програмыг хэр олон удаа шинэчлэх (Update) хэрэгтэй вэ?",
    answers: [
      { label: "Байнга / Автоматаар (Шинэ вирус гарах бүрт)", answerYn: true },
      { label: "Сард нэг удаа", answerYn: false },
      { label: "Жилд нэг удаа", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: "WWW гэж юуны товчлол вэ?",
    answers: [
      { label: "World Wide Web", answerYn: true },
      { label: "Wide World Web", answerYn: false },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label: "Слайд шоуг дуусгах товчлуур?",
    answers: [
      { label: "Esc", answerYn: true },
      { label: "End", answerYn: false },
    ],
  },
];
