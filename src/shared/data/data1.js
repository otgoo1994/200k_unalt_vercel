export const categories = [
  { id: 0, name: "Excel" },
  { id: 1, name: "Word" },
  { id: 2, name: "Гарны хослол" },
  { id: 3, name: "PowerPoint" },
  { id: 4, name: "Аюулгүй байдал" },
  { id: 5, name: "Компьютер" },
  { id: 6, name: "Ёс зүй" },
];

export const questions = [
  {
    id: 1,
    category: 0,
    level: 1,
    label:
      '=IF(AND(A1>10, B1<5), "Yes", "No") томьёо бичигдсэн ба A1=12, B1=5 байхад үр дүн юу гарах вэ? ',
    answers: [
      {
        label: "Yes",
        answerYn: false,
      },
      {
        label: "No",
        answerYn: true,
      },
      {
        label: "#VALUE!",
        answerYn: false,
      },
      {
        label: "0",
        answerYn: false,
      },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label:
      '"Section Break (Next Page)" болон "Page Break" хоёрын гол ялгаа юу вэ?',
    answers: [
      {
        label: "Ялгаа байхгүй",
        answerYn: false,
      },
      {
        label:
          "Section Break нь баримтын хэсгүүдэд өөр өөр цаасны тохиргоо хийх боломж олгодог",
        answerYn: true,
      },
      {
        label: "Page Break нь шинэ файл үүсгэдэг",
        answerYn: false,
      },
      {
        label: "Page Break нь хөл, толгойн мэдээллийг салгадаг",
        answerYn: false,
      },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label:
      "Windows дээр Windows + Shift + S товчлуурын хослол ямар үйлдэл хийдэг вэ?",
    answers: [
      {
        label: "Системийн тохиргоо нээх",
        answerYn: false,
      },
      {
        label: "Компьютерийг түгжих",
        answerYn: false,
      },
      {
        label: "Хайлтын цонх нээх",
        answerYn: false,
      },
      {
        label: "Дэлгэцийн хэсэгчилсэн агшин авах",
        answerYn: true,
      },
    ],
  },
  {
    id: 4,
    category: 3,
    level: 2,
    label:
      "Бүх слайдын гарчгийн фонтыг нэгэн зэрэг ижил болгох хамгийн зөв арга? ",
    answers: [
      {
        label: "Slide Master руу орж үндсэн слайдыг засах",
        answerYn: true,
      },
      {
        label: "Format Painter ашиглах",
        answerYn: false,
      },
      {
        label: "Design цэснээс өнгө солих",
        answerYn: false,
      },
      {
        label: "Слайд бүрийг идэвхжүүлж засах ",
        answerYn: false,
      },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label:
      "Банкны хуурамч сайт руу хэрэглэгчийг үсэргэж мэдээлэл алдахыг юу гэдэг вэ?",
    answers: [
      {
        label: "Spamming ",
        answerYn: false,
      },
      {
        label: "Hacking ",
        answerYn: false,
      },
      {
        label: "Phishing ",
        answerYn: true,
      },
      {
        label: "DDoS",
        answerYn: false,
      },
    ],
  },
  {
    id: 6,
    category: 5,
    level: 3,
    label:
      "IPv4 хаяг онолын хувьд хамгийн ихдээ хэдэн тэрбум төхөөрөмжийг хаяглах боломжтой вэ?",
    answers: [
      {
        label: "8 тэрбум",
        answerYn: false,
      },
      {
        label: "4.3 тэрбум",
        answerYn: true,
      },
      {
        label: "100 сая",
        answerYn: false,
      },
      {
        label: "Хязгааргүй",
        answerYn: false,
      },
    ],
  },
  {
    id: 7,
    category: 0,
    level: 4,
    label: "Excel-д #DIV/0! алдаа ямар үед гардаг вэ? ",
    answers: [
      {
        label: "Текст болон тоог нэмэх үед",
        answerYn: false,
      },
      {
        label: "Тоог тэгд эсвэл хоосон нүдэнд хуваах үйлдэл хийгдсэн үед",
        answerYn: true,
      },
      {
        label: "Томьёоны нэр буруу үед ",
        answerYn: false,
      },
      {
        label: "Нүдний өргөн хүрэлцэхгүй үед",
        answerYn: false,
      },
    ],
  },
  {
    id: 8,
    category: 5,
    level: 4,
    label:
      'Ямар өргөтгөлтэй файл нь "Lossless" буюу чанараа алддаггүй шахагдсан аудио формат вэ?',
    answers: [
      {
        label: ".mp3",
        answerYn: false,
      },
      {
        label: ".wav",
        answerYn: false,
      },
      {
        label: ".flac",
        answerYn: true,
      },
      {
        label: ".jpg",
        answerYn: false,
      },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Ctrl + Shift + Esc дарахад юу нээгдэх вэ?",
    answers: [
      {
        label: "Control Panel ",
        answerYn: false,
      },
      {
        label: "System Info",
        answerYn: false,
      },
      {
        label: "Task Manager ",
        answerYn: true,
      },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: '"Open Source" програм хангамжийн үндсэн шинж чанар?',
    answers: [
      {
        label: "Үнэгүй боловч код нь хаалттай",
        answerYn: false,
      },
      {
        label: "Эх кодыг нь хэн ч харах, өөрчлөх, сайжруулах эрхтэй",
        answerYn: true,
      },
      {
        label: "Туршилтын хугацаатай",
        answerYn: false,
      },
    ],
  },
  {
    id: 11,
    category: 1,
    level: 6,
    label:
      '"Mail Merge" ашиглахад Excel файлаас мэдээлэл татахыг юу гэж нэрлэдэг вэ?',
    answers: [
      {
        label: "Data Filter",
        answerYn: false,
      },
      {
        label: "Insert Merge Field ",
        answerYn: false,
      },
      {
        label: "Select Recipients -> Use an Existing List ",
        answerYn: true,
      },
    ],
  },
  {
    id: 12,
    category: 3,
    level: 6,
    label: '"Animation Pane"-ийн гол үүрэг юу вэ?',
    answers: [
      {
        label: "Слайдын дизайныг солих",
        answerYn: false,
      },
      {
        label: "Хөдөлгөөний дараалал, хугацааг нарийвчлан тохируулах",
        answerYn: true,
      },
      {
        label: "Слайд хоорондын шилжилт хийх",
        answerYn: false,
      },
    ],
  },
  {
    id: 13,
    category: 5,
    level: 7,
    label: "SSD диск нь HDD-ээс юугаараа ялгаатай вэ?",
    answers: [
      {
        label: "Соронзон диск ашигладаг",
        answerYn: false,
      },
      {
        label: "Багтаамж нь бага",
        answerYn: false,
      },
      {
        label: "Хөдөлгөөнт эд ангигүй, флаш санах ой ашигладаг тул хурдан",
        answerYn: true,
      },
    ],
  },
  {
    id: 14,
    category: 0,
    level: 7,
    label:
      'Excel дээр 45300 гэсэн тоог "Date" формат руу шилжүүлбэл юу гарах вэ?',
    answers: [
      {
        label: "Алдаа заана",
        answerYn: false,
      },
      {
        label: "Тодорхой нэг огноо гарна (Excel огноог тоогоор кодлодог) ",
        answerYn: true,
      },
      {
        label: "Цаг гарна ",
        answerYn: false,
      },
    ],
  },
  {
    id: 15,
    category: 4,
    level: 8,
    label: '"Ransomware" халдлагын үед хамгийн түрүүнд хийх ёстой алхам?',
    answers: [
      {
        label: "Антивирус суулгах",
        answerYn: false,
      },
      {
        label: "Сүлжээнээс салгаж, нөөц хуулбараас сэргээх",
        answerYn: true,
      },
    ],
  },
  {
    id: 16,
    category: 0,
    level: 8,
    label: '"=ABS(-10) функцийн үр дүн?',
    answers: [
      {
        label: "10",
        answerYn: true,
      },
      {
        label: "-10 ",
        answerYn: false,
      },
    ],
  },
];
