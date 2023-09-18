export const quize = [
  {
    summ: 5000,
    task: {
      video:
        "https://dl.dropbox.com/s/v5gacsfdpyzsclve8q9df/1-1.mp4?rlkey=teiogplfp1c6rhywwha5tpbht&dl=0",
      text: "<p>Добрый день! У меня есть задача для тебя.</p><p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. <br />Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p><p>Я так устал от этого. Чувствую, что мы просто теряем часть нашей прибыли!</p><p>Хочется, чтобы клиенты получали рассылки про наши акции, при отправке счета доходили до адресатов, а при передаче клиента новому менеджеру он точно смог позвонить по корректному номеру или отправить ему коммерческое предложение.</p><p>Если ты сможешь мне помочь, я заплачу 5000 рублей.</p>",
    },
    content: {
      taskDescription: {
        video:
          "https://dl.dropbox.com/s/8oyzug18igmpptvfn9pu8/.mp4?rlkey=em8xm0dp2zego9n0otm78reif&dl=0",
        text: "<p>Чтобы выполнить эту задачу тебе понадобится понять что в системе есть поле ввода, которое имеет такой тип как строка и к данному типу поля ввода можно применить маску для ввода данных &mdash; эта функция отвечает за формирование внешнего вида вводимой пользователем в строку информации и за ее количество.</p><p>Именно эту функцию ты должен будешь использовать.</p><p>Для Маски существует набор символов ограничителей, сейчас тебе пригодятся следующие:</p><p>9 &ndash; вводиться могут только цифры;</p><p># - вводиться могут все цифры, пробел и знаки &laquo;+&raquo; и &laquo;-&raquo;;</p><p>@ - вводиться могут буквенные символы, при этом все они будут становиться верхним регистром;</p><p>X &ndash; вводиться могут любые символы латиницы.</p><p>И помни, ошибаться нельзя, за один неверный ответ сумма твоего заработка будет уменьшена на 25%, а за второй еще на 25%, заказчик заинтересован в безошибочности решения задачи, только так ты сможешь получить максимальную сумму вознаграждения.</p>",
      },

      quest: [
        {
          question:
            "Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона:",
          answers: [
            {
              text: "+7(@@@) @@@ @@ @@",
              isRight: false,
              explanation:
                '<p>Подумай еще немного, в выбранном тобой ответе присутствует символ "@" который позволяет вводить буквенные символы верхнего регистра.</p><p>Помни, ошибаться нельзя, ты дал не верный ответ, сумма твоего вознаграждения уменьшена на 1250₽</p>',
              isChecked: false,
            },
            {
              text: "+9(999)9999999",
              isRight: false,
              explanation:
                '<p>Подумай еще немного, в выбранном тобой ответе второй символ это "9", что позволит пользователю вместо кода страны &laquo;+7&raquo; ввести любую цифру.</p><p>Помни, ошибаться нельзя, ты дал не верный ответ, сумма твоего вознаграждения уменьшена на 1250₽</p>',
              isChecked: false,
            },
            {
              text: "+7(999) 999 99 99",
              isRight: true,
              isChecked: false,
            },
            {
              text: "+9(XXX)@@@ @@ @@",
              isRight: false,
              isChecked: false,
              explanation:
                '<p>Подумай еще немного, в выбранном тобой ответе присутствует символ "X" который обозначает, что вводиться могут любые символы латиницы, а также символ "@", который позволяет вводить буквенные символы верхнего регистра.</p><p>Помни, ошибаться нельзя, ты дал не верный ответ, сумма твоего вознаграждения уменьшена на 1250₽</p>',
            },
          ],
        },
      ],
    },
    congrates: {
      video:
        "https://dl.dropbox.com/s/8zve7aepqx06647wus5pn/2-1-2.mp4?rlkey=bsrr3yyloaafdognhpqassns5&dl=0",
      text: "<p>Отлично, спасибо тебе огромное! </p><p>Наконец-то все работает так, как должно: номера телефонов клиентов в нашей базе теперь имеют единый формат и вводятся менеджерами безошибочно. Ты очень мне помог, оплата уже переведена на твой счет. Думаю, мы с тобой еще обязательно поработаем!</p>",
    },
  },

  {
    summ: 5000,
    task: {
      video: "",
      text: "task 2 ",
    },
    content: {
      taskDescription: {
        video: "",
        text: "taskDescription 2",
      },

      quest: [
        {
          question: "#22222 asdasdasdasdsa asd asd asd as as",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              isChecked: false,
            },
          ],
        },
        {
          question: "#22222",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              isChecked: false,
            },
          ],
        },
        {
          question: "#223",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              isChecked: false,
            },
          ],
        },
        {
          question: "#224",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              isChecked: false,
            },
          ],
        },
      ],
    },
    congrates: {
      video: "",
      text: "congrates 2 ",
    },
  },

  {
    summ: 5000,
    task: {
      video: "",
      text: "task 3",
    },
    content: {
      taskDescription: {
        video: "",
        text: "taskDescription 3",
      },

      quest: [
        {
          question: "#1 asdasdasdasdsa asd asd asd as as",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              explanation: "isRight",
              isChecked: false,
            },
          ],
        },
        {
          question: "#2",
          answers: [
            {
              text: "asd asd asd as das dd12123  1",
              isRight: false,
              explanation: "asd asd asd as das dd12123  1",
              isChecked: false,
            },
            {
              text: "asdasd asd asd sad asda ssd ",
              isRight: false,
              explanation: "asdasd asd asd sad asda ssd ",
              isChecked: false,
            },
            {
              text: "isRight",
              isRight: true,
              explanation: "isRight",
              isChecked: false,
            },
          ],
        },
      ],
    },
    congrates: {
      video: "",
      text: "congrates 3",
    },
  },
];
