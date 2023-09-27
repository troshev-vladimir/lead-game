export const quize = [
  {
    summ: 3000,
    task: {
      video:
        "https://dl.dropbox.com/s/v5gacsfdpyzsclve8q9df/1-1.mp4?rlkey=teiogplfp1c6rhywwha5tpbht&dl=0",
      text: "<p>Добрый день! У меня есть задача для тебя.</p><p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. <br />Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p><p>Я так устал от этого. Чувствую, что мы просто теряем часть нашей прибыли!</p><p>Хочется, чтобы клиенты получали рассылки про наши акции, при отправке счета доходили до адресатов, а при передаче клиента новому менеджеру он точно смог позвонить по корректному номеру или отправить ему коммерческое предложение.</p><p>Если ты сможешь мне помочь, я заплачу 3000 рублей.</p>",
    },
    content: {
      taskDescription: {
        video:
          "https://dl.dropbox.com/s/8oyzug18igmpptvfn9pu8/.mp4?rlkey=em8xm0dp2zego9n0otm78reif&dl=0",
        text: "<p>Чтобы выполнить эту задачу тебе понадобится понять что в системе есть поле ввода, которое имеет такой тип как строка и к данному типу поля ввода можно применить маску для ввода данных &mdash; эта функция отвечает за формирование внешнего вида вводимой пользователем в строку информации и за ее количество.</p><p>Именно эту функцию ты должен будешь использовать.</p><p>Для Маски существует набор символов ограничителей, сейчас тебе пригодятся следующие:</p><p>9 &ndash; вводиться могут только цифры;</p><p># - вводиться могут все цифры, пробел и знаки &laquo;+&raquo; и &laquo;-&raquo;;</p><p>@ - вводиться могут буквенные символы, при этом все они будут становиться верхним регистром;</p><p>X &ndash; вводиться могут любые символы латиницы.</p><p>И помни, ошибаться нельзя, за один неверный ответ сумма твоего заработка будет уменьшена на 1250₽, а за второй еще на 1250₽, заказчик заинтересован в безошибочности решения задачи, только так ты сможешь получить максимальную сумму вознаграждения.</p>",
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
    summ: 3000,
    task: {
      video:
        "https://dl.dropbox.com/s/i5mehb7a8mi4sml6xgsvr/2.mp4?rlkey=xcvdk4btze8uy7a4r2cpg5nf4&dl=0",
      text: "<p>Добрый день! Мне нужна твоя помощь.</p><p>Мы&nbsp;занимаемся торговлей спортивным инвентарем и&nbsp;делаем акции со&nbsp;скидками на&nbsp;группы товаров.<br />Сейчас менеджеры ставят скидки в&nbsp;платежных документах вручную и&nbsp;иногда ошибаются.<br />Из-за ошибок нам приходится объяснять клиентам, что цена с&nbsp;такой скидкой неверная&nbsp;&mdash; это ошибка менеджера.</p><p>Нам нужно сделать так, чтобы скидка, сделанная менеджером, не&nbsp;могла быть больше, чем определенное ее&nbsp;значение на&nbsp;группу товаров.<br />Помоги мне решить эту проблему. Я&nbsp;готов заплатить за&nbsp;это 3000&nbsp;рублей.</p>",
    },
    content: {
      taskDescription: {
        video:
          "https://dl.dropbox.com/s/08gl29umsb5fa5d7glq6j/2.mp4?rlkey=cf6w4z8jun228mpqwg7og6o5n&dl=0",
        text: "<p>Получается, когда менеджер вводит значение скидки, система должна проинформировать его, если введенная скидка больше разрешенной. Только после того, как менеджер исправит ее&nbsp;значение, документ может быть проведен.</p><p>Расчет скидки&nbsp;&mdash; процесс простой, но&nbsp;нам нужно точно определить момент, когда система должна осуществить проверку.</p><p>При работе в&nbsp;документе в&nbsp;системе происходит множество событий.<br />Опишем некоторые их&nbsp;типы:</p><p>ПриОткрытии&nbsp;&mdash; последний этап при открытии документа, когда можно отказаться от&nbsp;открытия.</p><p>ПередЗаписью&nbsp;&mdash; анализ готовности изменений документа для их&nbsp;записи.</p><p>ПриЗаписи&nbsp;&mdash; все данные документа уже записаны, выполняются дополнительные обработки в&nbsp;системе.</p><p>ПослеЗаписи&nbsp;&mdash; взаимодействия с&nbsp;пользователем, объект гарантированно записан.</p><p>Выбери событие, где нужно применить нашу проверку. И&nbsp;помни, ошибаться нельзя, как и&nbsp;в&nbsp;прошлый раз, твой гонорар будет уменьшен при совершении первой ошибки на&nbsp;1250₽ и&nbsp;также при совершении второй.</p>",
      },

      quest: [
        {
          question:
            "<p>Выбери событие, где нужно применить проверку правильности, введенной менеджером скидки.</p>",
          answers: [
            {
              text: "ПриОткрытии",
              isRight: false,
              explanation:
                "<p>Подумай еще немного. В&nbsp;выбранном тобой ответе документ, в&nbsp;который пользователь должен внести скидку, еще не&nbsp;открыт.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
              isChecked: false,
            },
            {
              text: "ПередЗаписью",
              isRight: true,
              isChecked: false,
            },
            {
              text: "ПриЗаписи",
              isRight: false,
              explanation:
                "<p>Подумай еще немного. В&nbsp;выбранном тобой ответе запись данных, в&nbsp;том числе о&nbsp;скидке, уже произошла.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
              isChecked: false,
            },
            {
              text: "ПослеЗаписи",
              isRight: false,
              isChecked: false,
              explanation:
                "<p>Подумай еще немного. В&nbsp;выбранном тобой ответе запись данных, в&nbsp;том числе о&nbsp;скидке, уже произошла.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
            },
          ],
        },
      ],
    },
    congrates: {
      video:
        "https://dl.dropbox.com/s/ig137vko4hmfumrq82q3a/.mp4?rlkey=4lxnhjdb7ebl0myh1mnf8na9u&dl=0",
      text: "<p>Отлично, ты&nbsp;мне очень помог, еще поработаем вместе!</p>",
    },
  },

  {
    summ: 3000,
    task: {
      video:
        "https://dl.dropbox.com/s/okxdc51p1lvtmfmok9emw/3.mp4?rlkey=z5c8wf3pngzlmx2hol351vv6w&dl=0",
      text: "<p>Здравствуй! <br />В&nbsp;прошлый раз ты&nbsp;отлично поработал. Наши рекламные акции стали более эффективны, мы&nbsp;больше не&nbsp;теряем клиентов из-за ошибок в&nbsp;номерах телефонов. </p><p>Благодаря твоей работе прибыль компании выросла на&nbsp;15% и&nbsp;мы&nbsp;вышли на&nbsp;международный рынок.</p><p>Сейчас мне снова нужна твоя помощь! Теперь нам необходимо всегда правильно вводить и&nbsp;зарубежные номера.</p><p>Помоги мне с&nbsp;решением этой задачи, и&nbsp;я&nbsp;заплачу тебе ещё 3000&nbsp;рублей.</p>",
    },
    content: {
      taskDescription: {
        video:
          "https://dl.dropbox.com/s/43staam1bjad1llys6eem/3.mp4?rlkey=wcadhs26gyxjey7enkzyyk4yz&dl=0",
        text: "<p>Итак, ты&nbsp;уже знаешь, что для корректного ввода номера телефона нужно определить общее количество символов в&nbsp;нем и&nbsp;присвоить маску, исходя из&nbsp;того, какие это должны быть символы.</p><p>Однако международные номера телефонов могут быть очень разными, и&nbsp;фиксированного кода страны&nbsp;&mdash; &laquo;+7&raquo; там уже не&nbsp;будет. Но&nbsp;по-прежнему все номера должны начинаться со&nbsp;знака &laquo;+&raquo;.</p><p>Выбери одну из&nbsp;масок, которую нам нужно использовать для решения данной задачи. И&nbsp;помни, ошибаться нельзя. Как и&nbsp;в&nbsp;прошлый раз, твой гонорар будет уменьшен при совершении первой ошибки на&nbsp;1250&nbsp;₽ и&nbsp;на&nbsp;такую&nbsp;же сумму при второй.</p>",
      },

      quest: [
        {
          question:
            "<p>Выбери корректную маску для международного номера телефона.</p>",
          answers: [
            {
              text: "+@@@@(@@@)@@-@@",
              isRight: false,
              explanation:
                "<p>Подумай еще немного. В&nbsp;выбранном тобой ответе присутствует символ &laquo;@&raquo; который позволяет вводить буквенные символы верхнего регистра.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
              isChecked: false,
            },
            {
              text: "+9999(999)99-99",
              isRight: true,
              isChecked: false,
            },
            {
              text: "+7999(999)99-99",
              isRight: false,
              explanation:
                "<p>Подумай еще немного. В&nbsp;твоем ответе присутствует фиксированный символ &laquo;+7&raquo;, а&nbsp;ведь коды стран могут начинаться и&nbsp;с&nbsp;других цифр.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
              isChecked: false,
            },
            {
              text: "+X999(999)99-99",
              isRight: false,
              isChecked: false,
              explanation:
                "<p>Подумай еще немного, в&nbsp;выбранном тобой ответе присутствует символ &laquo;X&raquo; который обозначает, что вводиться могут любые символы латиницы.</p><p>Помни, ошибаться нельзя, ты&nbsp;дал не&nbsp;верный ответ, сумма твоего вознаграждения уменьшена на&nbsp;1250₽</p>",
            },
          ],
        },
      ],
    },
    congrates: {
      video:
        "https://dl.dropbox.com/s/o4i4g8k06g2u13t4rkz3j/3.mp4?rlkey=eem80de16marizicq1do3otiy&dl=0",
      text: "<p>Отлично, ты&nbsp;как всегда на&nbsp;высоте, теперь мы&nbsp;сможем эффективно работать с&nbsp;нашими заказчиками за&nbsp;рубежом и&nbsp;вырастем еще больше! Приятно иметь с&nbsp;тобой дело, еще увидимся!</p>",
    },
  },
];
