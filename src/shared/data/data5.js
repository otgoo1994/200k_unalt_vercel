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
    label: '=TRIM(" Hello World ") функцийн үр дүн?',
    answers: [
      { label: '"HelloWorld"', answerYn: false },
      {
        label: '"Hello World" (Хоёр талын илүү зайг арилгана)',
        answerYn: true,
      },
      { label: '" Hello World "', answerYn: false },
      { label: '"Hello"', answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: 'Текстийг "Justify" буюу хоёр талд тэгшлэх товчлол?',
    answers: [
      { label: "Ctrl + L", answerYn: false },
      { label: "Ctrl + R", answerYn: false },
      { label: "Ctrl + J", answerYn: true },
      { label: "Ctrl + E", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Excel-д одоогийн цагийг (Time) оруулах товчлол?",
    answers: [
      { label: "Ctrl + ;", answerYn: false },
      { label: "Ctrl + Shift + ;", answerYn: true },
      { label: "Alt + T", answerYn: false },
      { label: "Ctrl + T", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label:
      "Компьютерийн эд ангиудыг хооронд нь холбодог үндсэн хавтанг юу гэдэг вэ?",
    answers: [
      { label: "CPU", answerYn: false },
      { label: "Motherboard", answerYn: true },
      { label: "Hard Disk", answerYn: false },
      { label: "Power Supply", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: '"Firewall" (Галт хана) ямар үүрэгтэй вэ?',
    answers: [
      { label: "Компьютерийг хөргөх", answerYn: false },
      {
        label: "Сүлжээний хандалтыг хянах, зөвшөөрөлгүй хандалтыг хаах",
        answerYn: true,
      },
      { label: "Вирус устгах", answerYn: false },
      { label: "Хурд нэмэх", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: '"Cloud Computing" (Үүлэн тооцоолол) гэж юу вэ?',
    answers: [
      { label: "Цаг агаарын мэдээ", answerYn: false },
      { label: "Хиймэл дагуул", answerYn: false },
      {
        label:
          "Интернэтээр дамжуулан сервер, өгөгдлийн сан, програмыг ашиглах үйлчилгээ",
        answerYn: true,
      },
      { label: "Утасгүй сүлжээ", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label:
      "Слайд дээрх видеог автоматаар тоглуулах (Start Automatically) тохиргоог хаанаас хийх вэ?",
    answers: [
      { label: "Transitions tab", answerYn: false },
      { label: "Animations tab", answerYn: false },
      { label: "Video Playback tab", answerYn: true },
      { label: "Insert tab", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label:
      "Excel-ийн нүдэнд 001 гэж бичихэд 1 болж хувираад байвал яаж 001 хэвээр нь байлгах вэ?",
    answers: [
      { label: "Боломжгүй", answerYn: false },
      {
        label:
          'Нүдний форматыг "Text" болгох эсвэл урд нь \' (single quote) тавих',
        answerYn: true,
      },
      { label: '"Number" формат сонгох', answerYn: false },
      { label: "Зай авах", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Вэб хөтөч дээр хуудасны текстийг томруулах (Zoom In) товчлол?",
    answers: [
      { label: "Ctrl + (+)", answerYn: true },
      { label: "Alt + (+)", answerYn: false },
      { label: "Shift + (+)", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: '"Plagiarism" буюу оюуны хулгай гэж юу вэ?',
    answers: [
      { label: "Бусдын компьютерийг эвдэх", answerYn: false },
      {
        label:
          "Бусдын бүтээлийг эх сурвалж дурдахгүйгээр өөрийн нэрээр ашиглах",
        answerYn: true,
      },
      { label: "Хууль бус програм татах", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label: "USB 3.0 болон USB 2.0-ийг хараад хэрхэн ялгах вэ?",
    answers: [
      {
        label: "USB 3.0 нь дотор талдаа цэнхэр өнгөтэй байдаг",
        answerYn: true,
      },
      { label: "Ялгах боломжгүй", answerYn: false },
      { label: "Үнээр нь", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label:
      '"Table of Contents" (Гарчиг) үүсгэхийн тулд текстүүдийг юутай холбох шаардлагатай вэ?',
    answers: [
      { label: "Heading Styles (Heading 1, 2...)", answerYn: true },
      { label: "Page Numbers", answerYn: false },
      { label: "Bold", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: "=MAX(A1:A5) функц юуг олох вэ?",
    answers: [
      { label: "Нийлбэр", answerYn: false },
      { label: "Хамгийн их утга", answerYn: true },
      { label: "Хамгийн бага утга", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: "Нийтийн Wi-Fi (Public Wi-Fi) ашиглах үед юу хийх нь эрсдэлтэй вэ?",
    answers: [
      { label: "Мэдээ унших", answerYn: false },
      { label: "Youtube үзэх", answerYn: false },
      { label: "Банкны гүйлгээ хийх, нууц үгээр нэвтрэх", answerYn: true },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: "404 Error гэж юу вэ?",
    answers: [
      { label: "Хуудас олдсонгүй (Page Not Found)", answerYn: true },
      { label: "Хандах эрхгүй", answerYn: false },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label: "Илтгэгчийн тэмдэглэл (Speaker Notes) үзэгчдэд харагдах уу?",
    answers: [
      { label: "Тийм", answerYn: false },
      {
        label: "Үгүй, зөвхөн Presenter View горимд илтгэгчид харагдана",
        answerYn: true,
      },
    ],
  },
];
