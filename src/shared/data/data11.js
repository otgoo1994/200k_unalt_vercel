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
    label: "=POWER(2, 3) функцийн үр дүн?",
    answers: [
      { label: "9", answerYn: false },
      { label: "8 (2-ын 3 зэрэг)", answerYn: true },
      { label: "5", answerYn: false },
      { label: "6", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: "Текстийг баруун тийш зэрэгцүүлэх (Align Right) товчлол?",
    answers: [
      { label: "Ctrl + E", answerYn: false },
      { label: "Ctrl + R", answerYn: true },
      { label: "Ctrl + L", answerYn: false },
      { label: "Ctrl + J", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Ctrl + V товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Paste (Буулгах)", answerYn: true },
      { label: "Copy", answerYn: false },
      { label: "Cut", answerYn: false },
      { label: "View", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: '"Input Device" (Оролтын төхөөрөмж)-д аль нь орох вэ?',
    answers: [
      { label: "Keyboard, Mouse", answerYn: true },
      { label: "Monitor, Printer", answerYn: false },
      { label: "Speaker, Projector", answerYn: false },
      { label: "Headphone", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: '"Hacker" гэж хэн бэ?',
    answers: [
      { label: "Компьютер засдаг хүн", answerYn: false },
      {
        label:
          "Компьютерийн системд зөвшөөрөлгүй нэвтэрдэг, мэдээлэл хулгайлдаг хүн",
        answerYn: true,
      },
      { label: "Програм зохиогч", answerYn: false },
      { label: "Тоглоомчин", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: '"E-mail" гэж юу вэ?',
    answers: [
      { label: "Цахим гарын үсэг", answerYn: false },
      { label: "Цахим шуудан", answerYn: true },
      { label: "Цахим худалдаа", answerYn: false },
      { label: "Цахим хичээл", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label: "PowerPoint дээр слайд дээр зураг оруулах цэс?",
    answers: [
      { label: "Design", answerYn: false },
      { label: "Insert", answerYn: true },
      { label: "View", answerYn: false },
      { label: "Home", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label: "=A1*B1 томьёо юу хийх вэ?",
    answers: [
      { label: "Үржүүлнэ", answerYn: true },
      { label: "Нэмнэ", answerYn: false },
      { label: "Хасна", answerYn: false },
      { label: "Хуваана", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Ctrl + S товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Save (Хадгалах)", answerYn: true },
      { label: "Select All", answerYn: false },
      { label: "Search", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: '"Digital Citizenship" (Дижитал иргэншил) гэж юу вэ?',
    answers: [
      {
        label: "Технологийг хариуцлагатай, зөв зохистой ашиглах чадвар",
        answerYn: true,
      },
      { label: "Зөвхөн тоглоом тоглох", answerYn: false },
      { label: "Програм бичих", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label: '"Output Device" (Гаралтын төхөөрөмж)-д аль нь орох вэ?',
    answers: [
      { label: "Monitor, Printer", answerYn: true },
      { label: "Keyboard", answerYn: false },
      { label: "Mouse", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label: "Текстийг голлуулах (Center) товчлол?",
    answers: [
      { label: "Ctrl + E", answerYn: true },
      { label: "Ctrl + L", answerYn: false },
      { label: "Ctrl + R", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: "=A1-B1 томьёо юу хийх вэ?",
    answers: [
      { label: "Хасна", answerYn: true },
      { label: "Нэмнэ", answerYn: false },
      { label: "Үржүүлнэ", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: "Компьютерээ орхиж явахдаа яах ёстой вэ?",
    answers: [
      { label: "Дэлгэцээ түгжих (Lock) эсвэл Log out хийх", answerYn: true },
      { label: "Дэлгэцээ асаалттай орхих", answerYn: false },
      { label: "Хулганаа салгах", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: '"Download" гэж юу вэ?',
    answers: [
      { label: "Интернэтээс файл татаж авах", answerYn: true },
      { label: "Файл илгээх", answerYn: false },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label: "Слайдын загварыг өөрчлөх цэс?",
    answers: [
      { label: "Design", answerYn: true },
      { label: "Home", answerYn: false },
    ],
  },
];
