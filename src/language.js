import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import IconCard from "./components/IconCard/IconCard.jsx";

export const language = {
    ARM: {
        NAV_LINKS: [
            { to: '/', label: 'Գլխավոր էջ' },
            { to: '/catalog', label: 'Կատալոգ' },
            { to: '/about', label: 'Մեր մասին' },
            { to: '/contact', label: 'Կապ' },
        ],
        homeHeaderTitle: 'Փափուկ կահույք',
        homeHeaderTitleSpan: 'հարմարավետ կյանքի համար',
        homeHeaderSubTitle: 'Բազմոցներ, բազկաթոռներ և հավաքածուներ՝ հարմարավետ, ժամանակակից, բարձրորակ',
        homeTitle: 'Առաջարկվող Հավաքածու',
        homeSubTitle: 'Բացահայտեք մեր ամենացանկալի իրերը, որոնցից յուրաքանչյուրը պատմում է բացառիկ վարպետության և անժամանակյա դիզայնի մասին։',
        products: [
            { id: "1", name: "Զմրուխտյա թավշյա բազմոց", description: "Շքեղ զմրուխտ կանաչ թավշյա բազմոց՝ էլեգանտ կորերով և ոսկեգույն մետաղական ոտքերով։", price: "1.237.000", image: ["/images/sofa-emerald-1.png", "/images/sofa-emerald-2.png", "/images/sofa-emerald-3.png", "/images/sofa-emerald-4.png"], category: "sofas", material: ["թավիշ", "մետաղ"], color: "զմրուխտ" },
            { id: "2", name: "Կոնյակագույն կաշվե բազկաթոռ", description: "Միջին դարի ոճի կաշվե բազկաթոռ՝ կոնյակագույն երանգով և բարձրորակ փայտե ոտքերով։", price: "694.000", image: ["/images/armchair-leather-1.png", "/images/armchair-leather-2.png", "/images/armchair-leather-3.png", "/images/armchair-leather-4.png"], category: "armchairs", material: ["կաշի", "փայտ"], color: "շագանակագույն" },
            { id: "3", name: "Մուգ կապույտ թավշյա մահճակալ", description: "Շքեղ թավշյա մահճակալի շրջանակ՝ մուգ կապույտ գույնով, կոճկված գլխամասով և ոսկեգույն դետալներով։", price: "1.725.000", image: ["/images/bed-navy-1.png", "/images/bed-navy-2.png"], category: "beds", material: ["թավիշ", "մետաղ"], color: "մուգ կապույտ" },
            { id: "4", name: "Ընկուզենու փայտից պահարան", description: "Ժամանակակից պահարան մուգ ընկուզենու փայտից՝ էլեգանտ պղնձագույն բռնակներով։", price: "1.013.000", image: ["/images/cabinet-walnut-1.png", "/images/cabinet-walnut-2.png", "/images/cabinet-walnut-3.png"], category: "cabinets", material: ["փայտ", "մետաղ"], color: "շագանակագույն" },
            { id: "5", name: "Վարդագույն թավշյա նստարան", description: "Պրեմիում թավշյա նստարան՝ մեղմ վարդագույն երանգով և ոսկեգույն մետաղական ոտքերով։", price: "338.000", image: ["/images/bench-velvet-1.png", "/images/bench-velvet-2.png"], category: "benches", material: ["թավիշ", "մետաղ"], color: "վարդագույն" },
            { id: "6", name: "Ժամանակակից պահեստավորման դարակ", description: "Շքեղ ժամանակակից գրադարակ՝ սև մետաղից և փայտից՝ էլեգանտ արդյունաբերական դիզայնով։", price: "600.000", image: ["/images/storage-shelf-1.png", "/images/storage-shelf-2.png"], category: "storage", material: ["մետաղ", "փայտ"], color: "մոխրագույն" },
            { id: "7", name: "Մուգ մոխրագույն անկյունային բազմոց", description: "Ժամանակակից L-աձև բազմոց՝ մոխրագույն գործվածքից՝ մաքուր և պարզ գծերով։", price: "1.837.000", image: ["/images/sofa-sectional-1.png", "/images/sofa-sectional-2.png", "/images/sofa-sectional-3.png"], category: "sofas", material: ["գործվածք"], color: "մոխրագույն" },
            { id: "8", name: "Բորդո թավշյա բազկաթոռ", description: "Շքեղ բազկաթոռ խոր բորդո թավշից՝ կոր մեջքով և ոսկեգույն շրջանակով։", price: "487.000", image: ["/images/armchair-velvet-1.png", "/images/armchair-velvet-2.png", "/images/armchair-velvet-3.png"], category: "armchairs", material: ["թավիշ", "մետաղ"], color: "բորդո" }
        ],
        productsColor: 'գույն',
        productsMaterial: 'նյութ',
        productsPrice: 'գին',
        productCardLinkName: 'Դիտել մանրամասները',
        homeLinkCatalog: 'դիտել բոլոր ապրանքները',
        homePageAboutContainerIcons: [
            { src: 'FaLeaf',   oneSubtitle: 'Կայուն',  twoSubtitles: 'Էկոլոգիապես մաքուր նյութեր' },
            { src: 'FaHammer',  oneSubtitle: 'Ձեռագործ',  twoSubtitles: 'Ձեռագործ որակ' },
            { src: 'FaHeart', oneSubtitle: 'Ժամանակից դուրս', twoSubtitles: 'Դասական դիզայններ', }
        ],
        homePageAboutTitle: 'Մենք կահույք ենք ստեղծում հոգով',
        homeLinkAbout: 'ավելին մեր մասին',
        homePageAboutSubtitle: [
            'Մեր կահույքի արտադրամասը փորձառու վարպետների թիմ է, որոնք երկար տարիներ զբաղվում են պատվերով բարձրորակ կահույքի արտադրությամբ։ Մենք ստեղծում ենք արտադրանք, որը միավորում է հարմարավետությունը, հուսալիությունը և գեղեցիկ ժամանակակից դիզայնը։',
            'Մեր աշխատանքի հիմնական ուղղությունը փափուկ և կորպուսային կահույքի արտադրությունն է՝ անհատական պատվերներով։ Մենք պատրաստում ենք բազմոցներ, բազկաթոռներ, մահճակալներ, դռներ, խոհանոցային կահույք և ինտերիերի այլ տարրեր՝ հաշվի առնելով մեր հաճախորդների բոլոր ցանկությունները։',
            'Յուրաքանչյուր պատվեր մեզ համար անհատական նախագիծ է։ Հաճախորդները կարող են ընտրել դիզայնը, չափերը, նյութերը, գործվածքները և գույները, որպեսզի կահույքը լիովին համապատասխանի իրենց տան, բնակարանի կամ գրասենյակի ինտերիերին։ Մեր վարպետները մեծ ուշադրությամբ աշխատում են յուրաքանչյուր մանրուքի վրա, որպեսզի պատրաստի արտադրանքը լինի որակյալ, դիմացկուն և հարմար օգտագործման համար։',
            'Մեր աշխատանքում օգտագործում ենք միայն փորձված նյութեր և ժամանակակից արտադրական տեխնոլոգիաներ։ Դրա շնորհիվ մեր կահույքը երկար տարիներ պահպանում է իր տեսքն ու հարմարավետությունը։',
            'Մեր նպատակն է ստեղծել կահույք, որը տունը դարձնում է ավելի հարմարավետ և գեղեցիկ։ Մենք գնահատում ենք մեր հաճախորդների վստահությունը և միշտ ձգտում ենք ապահովել բարձր որակ, կոկիկ աշխատանք և անհատական մոտեցում յուրաքանչյուր պատվերի նկատմամբ։'
        ],
        homePageContactTitle: 'Կապ մեզ հետ',
        homePageContactSubtitle: 'Մենք միշտ ուրախ ենք օգնել Ձեզ կահույքի ընտրության հարցում',
        homePageContactContainerIcons: [
            { src: 'FiPhone',  oneSubtitle: 'Հեռախոս',  twoSubtitles: '099-04-75-14'},
            { src: 'RiFacebookBoxLine', oneSubtitle: 'Facebook',  twoSubtitles: 'https://www.facebook.com/'},
            { src: 'IoLogoInstagram', oneSubtitle: 'Instagram', twoSubtitles: 'https://www.instagram.com/'},
            { src: 'LuMapPin', oneSubtitle: 'Հասցե', twoSubtitles: 'քաղաք Էջմիածին, Արարատյան փողոց, 27'}
        ],
        aboutHeaderTitle: 'Հարմարավետություն, որը ստեղծվել է հատուկ Ձեզ համար',
        aboutHeaderSubTitle: 'Մեր մասին',
        aboutSectionInfoTitle: 'Մեր մասին - հարմարավետություն, որը ստեղծվել է հատուկ Ձեզ համար',
        aboutSectionInfoText: [
            'Մեր կահույքի արհեստանոցը փորձառու արհեստավորների թիմ է, որը ստեղծում է բարձրորակ, պատվերով պատրաստված փափուկ կահույք: Մենք համատեղում ենք պրոֆեսիոնալիզմը, ժամանակակից տեխնոլոգիաները և ուշադրությունը մանրուքների նկատմամբ՝ ապահովելու համար, որ յուրաքանչյուր կտոր լինի ոչ միայն գեղեցիկ, այլև չափազանց հարմարավետ:',
            'Մենք պատրաստում ենք բազմոցներ, բազկաթոռներ, մահճակալներ, դռներ, խոհանոցային կահույք և ցանկացած բարդության այլ ինտերիերի տարրեր: Դուք կարող եք ընտրել դիզայնը, չափը, նյութերը և գույնը. մենք կստեղծենք կահույք, որը կատարելապես կհամապատասխանի ձեր ինտերիերին:',
            'Յուրաքանչյուր կտոր ձեռագործ է փորձառու արհեստավորների կողմից՝ օգտագործելով հուսալի նյութեր և ապացուցված տեխնոլոգիաներ: Մենք հատուկ շեշտը դնում ենք մեր կահույքի որակի, դիմացկունության և հարմարավետության վրա:',
            'Մենք հավատում ենք, որ կահույքը պետք է ոչ միայն զարդարի տունը, այլև ստեղծի հարմարավետ և հարմարավետության մթնոլորտ: Ահա թե ինչու մենք յուրաքանչյուր պատվերի մոտենում ենք խնամքով և պրոֆեսիոնալիզմով։',
            'Կապվեք մեզ հետ՝ ձեր նախագիծը քննարկելու համար, և մենք կստեղծենք Ձեզ համար իդեալական կահույք։'
        ],
        aboutSectionInfoItemsSmallTitle: 'Ինչն է մեզ առանձնացնում',
        aboutSectionInfoItemsTitle: 'Մեր արհեստի հիմունքները',
        aboutSectionInfoItems: [
            { src: 'LuPalette', oneSubtitle: 'Անհատական դիզայն', twoSubtitles: 'Յուրաքանչյուր կահույք ստեղծվում է ձեր յուրահատուկ գաղափարների և տարածքի պահանջների համաձայն։' },
            { src: 'FiLayers', oneSubtitle: 'Բարձրորակ նյութեր', twoSubtitles: 'Լայն ընտրություն լավագույն գործվածքներից, կաշվից և բնական փայտից։' },
            { src: 'LuUsers', oneSubtitle: 'Փորձառու վարպետներ', twoSubtitles: 'Տասնամյակների փորձ ավանդական և ժամանակակից կահույքի պատրաստման մեջ։' },
            { src: 'LuShield', oneSubtitle: 'Երկարակյաց կառուցվածք', twoSubtitles: 'Բարձրորակ արտադրական տեխնոլոգիաները ապահովում են կահույքի երկարաժամկետ օգտագործումը։' }
        ],
        aboutSectionInfoList: [
            'Ձեր ցանկություններին համապատասխան պատվերով պատրաստված կահույք',
            'Գործվածքների, գույների և նյութերի լայն ընտրանի',
            'Երկար տարիների փորձ ունեցող փորձառու արհեստավորներ',
            'Բարձրորակ և դիմացկուն դիզայն',
            'Ուշադրություն յուրաքանչյուր մանրուքի նկատմամբ'
        ],
        aboutSectionInfoListSubTitle: 'Ինչու՞ ընտրել մեզ',
        aboutSectionInfoListTitle: 'Վստահության վրա կառուցված գործընկերություն',
        aboutSectionInfoListText: 'Մեզ ընտրելով՝ դուք գնում եք ոչ միայն կահույք. դուք ներդրում եք կատարում այնպիսի իրերի մեջ, որոնք կդառնան ձեր ընտանիքի պատմության մի մասը: Մեր նվիրվածությունը գերազանցությանը ակնհայտ է առաջին խորհրդակցությունից և շարունակվում է տարիներ շարունակ առաքումից հետո:',
        contactHeaderTitle: 'Կապ մեզ հետ',
        contactHeaderSubTitle: 'Մենք միշտ պատրաստ ենք օգնել ձեզ կահույքի ընտրության, հին կահույքի վերանորոգման հարցում և սիրով կպատասխանենք ձեր բոլոր հարցերին',
        contactPageIframeTitle: 'Ինչպես գտնել մեզ',
        contactInfoTitle: 'Պատրա՞ստ եք քննարկել ձեր նախագիծը?',
        contactInfoText: 'Մենք պատրաստ ենք կյանքի կոչել ձեր գաղափարները՝ օգտագործելով բարձրորակ նյութեր և վարպետություն, ինչպես նաև առաջարկում ենք կահույքի մասնագիտական վերանորոգում',
        contactPageButtonText: 'Կապ մեզ հետ',
        catalogHeaderTitle: 'Պատվերով պատրաստված կահույքի կատալոգ',
        catalogHeaderSubTitle: 'Բացահայտեք ձեռագործ բազմոցներ, բազկաթոռներ, մահճակալներ և բարձրակարգ կահույք',
        categories: [
            { id: 'all', label: 'Բոլոր Կատեգորիաները' },
            { id: "sofas", label: 'Բազմոցներ' },
            { id: "armchairs", label: 'Բազկաթոռներ' },
            { id: "beds", label: 'Մահճակալներ' },
            { id: "cabinets", label: 'Պահարաններ' },
            { id: "benches", label: 'Նստարաններ' },
            { id: "storage", label: 'Պահեստային դարակ'}
        ],
        catalogCategoriesTitle: 'Մեր Հավաքածուն',
        catalogCategoriesSubTitle: 'Դիտեք մեր ընտրած բարձրորակ կահույքի տեսականին, որոնցից յուրաքանչյուրը պատրաստված է մանրուքներին բացառիկ ուշադրությամբ',
        filtersName: 'Ֆիլտրեր',
        catalogIndicativeGoods: [
            { id: '9', name: 'Փիրուզագույն Չեստերֆիլդ բազմոց', description: 'Էլեգանտ Chesterfield բազմոց՝ խորը կարերով, հարուստ փիրուզագույն երանգով։ Այն առանձնանում է կոր բազկակալներով, դեկորատիվ կոճակներով և դասական դիզայնով՝ ժամանակակից շեշտադրմամբ:', src: '/teal-chesterfield-sofa.png' },
            { id: '10', name: 'Մոխրագույն փափուկ մահճակալ', description: 'Այս ժամանակակից մահճակալն ունի մոխրագույն փափուկ գլխատախտակ և մինիմալիստական երկրաչափական նախշ: Դրա մաքուր դիզայնը, ամուր ոտքերը և հարմարավետ գեղագիտությունը այն դարձնում են իդեալական ժամանակակից ննջասենյակի համար:', src: '/gray-upholstered-bed.png' },
        ],
        catalogIndicativeGoodsPreface: {
            preface: 'ԱՌԱՋԱՐԿՎՈՂ ՄՈԴԵԼՆԵՐ',
            title: 'Պրեմիում',
            subTitle: 'Բացահայտեք մեր ամենանրբագեղ կահույքի կտորները, որոնցից յուրաքանչյուրը ներկայացնում է արհեստագործության և դիզայնի գագաթնակետը'
        },
        catalogFooterContent: {
            preface: 'ԱՆՀԱՏԱԿԱՆ ՄՈՏԵՑՈՒՄ',
            title: 'Մենք պատվերով կահույք ենք պատրաստում՞',
            subTitle: 'Մենք նախագծում և պատրաստում ենք կահույք, որը կատարելապես կլրացնի ձեր ինտերիերը։ Մեր վարպետները կիրականացնեն ձեր տեսլականը՝ ապահովելով բացառիկ որակ և ուշադրություն մանրուքների նկատմամբ',
            linkText: 'Կապ մեզ հետ'
        },
        buttonLoadMore: 'Բեռնել ավելի շատ ապրանքներ',
        footerTitle: 'Կահույքի պատվեր',
        footerText: 'Բարձրակարգ կահույք, պատրաստված անհատական պատվերով՝ բացառիկ որակով և մանրուքներին ուշադրություն դարձնելով։ Վերափոխեք ձեր տարածքը մեր ձեռագործ կտորներով։',
        footerLinkTitle: 'ԱՐԱԳ ՀՂՈՒՄՆԵՐ',
        footerContactTitle: 'Կապ',
        singleProductCardTitleTextOne: 'Ստեղծված է',
        singleProductCardTitleTextTwo: ' Կատարելության Համար',
        singleProductCard: [
            { src: 'LuGem',   oneSubtitle: 'Ձեռագործ',  twoSubtitles: 'Յուրաքանչյուր կտոր մանրակրկիտ կերպով պատրաստված է տասնամյակների փորձ ունեցող հմուտ արհեստավորների կողմից' },
            { src: 'PiTree',   oneSubtitle: 'Բարձրորակ փայտ',  twoSubtitles: 'Պինդ փայտե շրջանակներ, որոնք կառուցված են սերունդներին ծառայելու համար' },
            { src: 'LuShieldCheck',   oneSubtitle: 'Երկարակյաց',  twoSubtitles: 'Նախագծված է դիմացկունության համար, ամրացված միացումներով և բարձրորակ նյութերով' },
            { src: 'LuPalette',   oneSubtitle: 'Վերականգնում',  twoSubtitles: 'Մենք ուշադիր վերականգնում ենք ձեր հին կահույքը՝ այն կյանքի կոչելով և նոր ուժ, գեղեցկություն և ֆունկցիոնալություն հաղորդելով' },
        ],
        singleProductTextContainerTitle: 'Նրբագեղ ապրելակերպի արվեստը',
        singleProductTextContainerTexts: [
            'Մեր կահույքը ավելին է, քան պարզապես դիզայն. այն մարմնավորում է վարպետություն, նրբագեղություն և անժամանակ հարմարավետություն: Յուրաքանչյուր կտոր մանրակրկիտ կերպով պատրաստված է բարձրորակ նյութերով և բարդ տեխնիկայով՝ համատեղելով գեղագիտական գեղեցկությունը առօրյա ֆունկցիոնալության հետ:',
            'Յուրաքանչյուր մանրուք մանրակրկիտ կերպով մտածված է՝ սկսած բարձրորակ գործվածքների և ամուր փայտե կառուցվածքների ընտրությունից մինչև վերջնական հպումները, որոնք ներդաշնակություն և նրբագեղություն են հաղորդում: Արդյունքը կահույք է, որը ոչ միայն բարելավում է ձեր ինտերիերը, այլև բարելավում է ձեր կյանքի ընդհանուր որակը:',
            'Նոր կահույք ստեղծելուց բացի, մենք մասնագիտանում ենք վերականգնման և վերանորոգման մեջ: Մեր վարպետները կյանքի են կոչում մաշված և մաշված կտորները՝ պահպանելով դրանց բնավորությունը և վերականգնելով դրանց ամրությունն ու տեսքը: Մանրակրկիտ վերականգնման միջոցով ձեր կահույքը վերականգնում է իր գեղեցկությունը և շարունակում է ծառայել ձեզ տարիներ շարունակ:'
        ],

    },
    RUS: {
        NAV_LINKS: [
            { to: '/', label: 'Главная' },
            { to: '/catalog', label: 'Каталог' },
            { to: '/about', label: 'О нас' },
            { to: '/contact', label: 'Контакты' },
        ],
        homeHeaderTitle: 'Мягкая мебель',
        homeHeaderTitleSpan: 'для комфортной жизни',
        homeHeaderSubTitle: 'Диваны, кресла и комплекты, удобные, современные, высокого качества',
        homeTitle: 'Рекомендуемая Коллекция',
        homeSubTitle: 'Откройте для себя наши самые желанные изделия, каждое из которых рассказывает историю исключительного мастерства и вневременного дизайна.',
        products: [
            { id: "1", name: "Изумрудный бархатный диван", description: "Роскошный диван из изумрудного бархата с элегантными изгибами и золотыми металлическими ножками.", price: "1.237.000", image: ["/images/sofa-emerald-1.png", "/images/sofa-emerald-2.png", "/images/sofa-emerald-3.png", "/images/sofa-emerald-4.png"], category: "sofas", material: ["бархат", "металл"], color: "изумрудный" },
            { id: "2", name: "Кожаное кресло коньячного цвета", description: "Кресло в стиле mid-century из кожи коньячного цвета с высококачественными деревянными ножками.", price: "694.000", image: ["/images/armchair-leather-1.png", "/images/armchair-leather-2.png", "/images/armchair-leather-3.png", "/images/armchair-leather-4.png"], category: "armchairs", material: ["кожа", "дерево"], color: "коричневый" },
            { id: "3", name: "Тёмно-синяя бархатная кровать", description: "Роскошная кровать из бархата тёмно-синего цвета с стёганым изголовьем и золотыми деталями.", price: "1.725.000", image: ["/images/bed-navy-1.png", "/images/bed-navy-2.png"], category: "beds", material: ["бархат", "металл"], color: "тёмно-синий" },
            { id: "4", name: "Шкаф из орехового дерева", description: "Современный шкаф из тёмного орехового дерева с элегантными медными ручками.", price: "1.013.000", image: ["/images/cabinet-walnut-1.png", "/images/cabinet-walnut-2.png", "/images/cabinet-walnut-3.png"], category: "cabinets", material: ["дерево", "металл"], color: "коричневый" },
            { id: "5", name: "Розовая бархатная скамья", description: "Премиальная скамья из мягкого розового бархата с золотыми металлическими ножками.", price: "338.000", image: ["/images/bench-velvet-1.png", "/images/bench-velvet-2.png"], category: "benches", material: ["бархат", "металл"], color: "розовый" },
            { id: "6", name: "Современный стеллаж для хранения", description: "Стильный современный стеллаж из чёрного металла и дерева с элегантным индустриальным дизайном.", price: "600.000", image: ["/images/storage-shelf-1.png", "/images/storage-shelf-2.png"], category: "storage", material: ["металл", "дерево"], color: "серый" },
            { id: "7", name: "Тёмно-серый угловой диван", description: "Современный L-образный диван из серой ткани с чистыми и минималистичными линиями.", price: "1.837.000", image: ["/images/sofa-sectional-1.png", "/images/sofa-sectional-2.png", "/images/sofa-sectional-3.png"], category: "sofas", material: ["ткань"], color: "серый" },
            { id: "8", name: "Бордовый бархатный кресло", description: "Роскошное кресло из глубокого бордового бархата с изогнутой спинкой и золотым каркасом.", price: "487.000", image: ["/images/armchair-velvet-1.png", "/images/armchair-velvet-2.png", "/images/armchair-velvet-3.png"], category: "armchairs", material: ["бархат", "металл"], color: "бордовый" }
        ],
        productsColor: 'цвет',
        productsMaterial: 'материал',
        productsPrice: 'цена',
        productCardLinkName: 'Просмотреть подробности',
        homeLinkCatalog: 'посмотреть все товары',
        homePageAboutContainerIcons: [
            { src: 'FaLeaf', oneSubtitle: 'Устойчивый', twoSubtitles: 'Экологически чистые материалы' },
            { src: 'FaHammer',  oneSubtitle: 'Ручной работы',  twoSubtitles: 'Качество ручной работы' },
            { src: 'FaHeart', oneSubtitle: 'Вне времени', twoSubtitles: 'Классические дизайны', }
        ],
        homePageAboutTitle: 'Мы создаём мебель с душой',
        homeLinkAbout: 'больше о нас',
        homePageAboutSubtitle: [
            'Наш мебельный цех — это команда опытных мастеров, которые уже много лет занимаются изготовлением качественной мебели на заказ. Мы создаём изделия, которые сочетают в себе удобство, надежность и красивый современный дизайн.',
            'Основное направление нашей работы — производство мягкой мебели и корпусной мебели по индивидуальным заказам. Мы изготавливаем диваны, кресла, кровати, двери, кухонную мебель и другие элементы интерьера, учитывая все пожелания наших клиентов.',
            'Каждый заказ для нас — это индивидуальный проект. Клиенты могут выбрать дизайн, размеры, материалы, ткани и цвета, чтобы мебель идеально подходила для их дома, квартиры или офиса. Наши мастера внимательно работают над каждой деталью, чтобы готовое изделие было качественным, долговечным и удобным в использовании.',
            'В работе мы используем только проверенные материалы и современные технологии производства. Благодаря этому наша мебель служит долгие годы, сохраняя свой внешний вид и комфорт.',
            'Наша цель — создавать мебель, которая делает дом уютнее и красивее. Мы ценим доверие наших клиентов и всегда стремимся предложить лучшее качество, аккуратную работу и индивидуальный подход к каждому заказу.'
        ],
        homePageContactTitle: 'Свяжитесь с нами',
        homePageContactSubtitle: 'Мы всегда рады помочь с выбором мебели',
        homePageContactContainerIcons: [
            { src: 'FiPhone',  oneSubtitle: 'Телефон',  twoSubtitles: '099-04-75-14'},
            { src: 'RiFacebookBoxLine', oneSubtitle: 'Facebook',  twoSubtitles: 'https://www.facebook.com/'},
            { src: 'IoLogoInstagram', oneSubtitle: 'Instagram', twoSubtitles: 'https://www.instagram.com/'},
            { src: 'LuMapPin', oneSubtitle: 'Адрес', twoSubtitles: 'город Эчмиадзин, улица Араратян, 27'}
        ],
        aboutHeaderTitle: 'Комфорт, созданный специально для вас',
        aboutHeaderSubTitle: 'О нас',
        aboutSectionInfoTitle: 'О нас - комфорт, созданный специально для вас',
        aboutSectionInfoText: [
            'Наш мебельный цех — это команда опытных мастеров, которые создают качественную мягкую мебель по индивидуальным заказам. Мы объединяем профессионализм, современные технологии и внимание к деталям, чтобы каждая модель была не только красивой, но и максимально удобной.',
            'Мы изготавливаем изготавливаем диваны, кресла, кровати, двери, кухонную мебель и другие элементы интерьера любой сложности. Вы можете выбрать дизайн, размеры, материалы и цвет — мы создадим мебель, которая идеально впишется в ваш интерьер.',
            'Каждое изделие производится вручную опытными мастерами с использованием надежных материалов и проверенных технологий. Мы уделяем особое внимание качеству, долговечности и комфорту нашей мебели.',
            'Мы уверены, что мебель должна не только украшать дом, но и создавать атмосферу уюта и комфорта. Именно поэтому к каждому заказу мы подходим с заботой и профессионализмом.',
            'Свяжитесь с нами, чтобы обсудить ваш проект, и мы создадим мебель, которая идеально подойдет именно вам.'
        ],
        aboutSectionInfoItemsSmallTitle: 'Что нас отличает',
        aboutSectionInfoItemsTitle: 'Основы нашего ремесла',
        aboutSectionInfoItems: [
            { src: 'LuPalette', oneSubtitle: 'Индивидуальный дизайн', twoSubtitles: 'Каждое изделие создаётся с учётом вашего уникального видения и особенностей пространства.' },
            { src: 'FiLayers', oneSubtitle: 'Премиальные материалы', twoSubtitles: 'Большой выбор лучших тканей, кожи и натуральной древесины.' },
            { src: 'LuUsers', oneSubtitle: 'Опытные мастера', twoSubtitles: 'Десятилетия опыта в традиционном и современном изготовлении мебели.' },
            { src: 'LuShield', oneSubtitle: 'Создано на годы', twoSubtitles: 'Надёжные технологии производства обеспечивают долговечность мебели.' }
        ],
        aboutSectionInfoList: [
            'Индивидуальное изготовление мебели по вашим пожеланиям',
            'Большой выбор тканей, цветов и материалов',
            'Опытные мастера с многолетним стажем',
            'Качественные и долговечные конструкции',
            'Внимание к каждой детали'
        ],
        aboutSectionInfoListSubTitle: 'Почему выбирают нас',
        aboutSectionInfoListTitle: 'Партнерство, построенное на доверии',
        aboutSectionInfoListText: 'Выбирая нас, вы покупаете не просто мебель — вы инвестируете в предметы, которые станут частью истории вашей семьи. Наша приверженность к совершенству проявляется с момента первой консультации и на протяжении многих лет после доставки.',
        contactHeaderTitle: 'Свяжитесь с нами',
        contactHeaderSubTitle: 'Мы всегда готовы помочь вам с выбором мебели, ремонтом старой мебели и с радостью ответим на все ваши вопросы',
        contactPageIframeTitle: 'Как нас найти',
        contactInfoTitle: 'Готовы обсудить ваш проект?',
        contactInfoText: 'Мы готовы помочь воплотить ваши идеи в реальность, используя премиальные материалы и мастерство, а также предлагаем профессиональный ремонт старой мебели',
        contactPageButtonText: 'Связаться с нами',
        catalogHeaderTitle: 'Каталог мебели на заказ',
        catalogHeaderSubTitle: 'Откройте для себя диваны, кресла, кровати и предметы мебели премиум-класса ручной работы',
        categories: [
            { id: 'all', label: 'Все Категории' },
            { id: "sofas", label: 'Диваны' },
            { id: "armchairs", label: 'Кресла' },
            { id: "beds", label: 'Кровать' },
            { id: "cabinets", label: 'Шкафы' },
            { id: "benches", label: 'Скамейки' },
            { id: "storage", label: 'Стеллаж для хранения' }
        ],
        catalogCategoriesTitle: 'Наша Коллекция',
        catalogCategoriesSubTitle: 'Ознакомьтесь с нашей тщательно отобранной коллекцией предметов мебели премиум-класса, каждый из которых создан с исключительным вниманием к деталям',
        filtersName: 'Фильтры',
        catalogIndicativeGoods: [
            { id: '9', name: 'Бирюзовый Диван «Честерфилд»', description: 'Элегантный диван в стиле Chesterfield с глубокой каретной стяжкой, выполненный в насыщенном бирюзовом оттенке. Отличается изогнутыми подлокотниками, декоративными пуговицами и классическим дизайном с современным акцентом.', src: '/teal-chesterfield-sofa.png' },
            { id: '10', name: 'Серая Кровать с Обивкой', description: 'Современная кровать с мягким изголовьем в серой обивке, выполненная в минималистичном стиле с геометрическим рисунком. Отличается лаконичным дизайном, устойчивыми ножками и уютной эстетикой, идеально подходящей для современной спальни.', src: '/gray-upholstered-bed.png' },
        ],
        catalogIndicativeGoodsPreface: {
            preface: 'ПРЕДСТАВЛЕННЫЕ МОДЕЛИ',
            title: 'Премиум Класса',
            subTitle: 'Откройте для себя наши самые изысканные предметы мебели, каждый из которых представляет собой вершину мастерства и дизайна'
        },
        catalogFooterContent: {
            preface: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД',
            title: 'Мы изготавливаем мебель на заказ',
            subTitle: 'Мы проектируем и изготавливаем мебель, идеально подходящую к вашему интерьеру. Наши мастера воплотят ваше видение в жизнь, обеспечивая исключительное качество и внимание к деталям',
            linkText: 'Связаться с нами'
        },
        buttonLoadMore: 'Загрузить больше товаров',
        footerTitle: 'Заказ мебели',
        footerText: 'Мебель премиум-класса, изготовленная на заказ с исключительным качеством и вниманием к деталям. Преобразите свое пространство с помощью наших изделий ручной работы.',
        footerLinkTitle: 'БЫСТРЫЕ ССЫЛКИ',
        footerContactTitle: 'Контакт',
        singleProductCardTitleTextOne: 'Создано для',
        singleProductCardTitleTextTwo: ' Совершенства',
        singleProductCard: [
            { src: 'LuGem', oneSubtitle: 'Ручная работа', twoSubtitles: 'Каждое изделие тщательно создаётся опытными мастерами с многолетним стажем' },
            { src: 'PiTree', oneSubtitle: 'Премиальное дерево', twoSubtitles: 'Каркасы из массива дерева, рассчитанные на долгие годы службы' },
            { src: 'LuShieldCheck', oneSubtitle: 'Надёжность', twoSubtitles: 'Разработано для долговечности с усиленными соединениями и высококачественными материалами' },
            { src: 'LuPalette', oneSubtitle: 'Реставрация', twoSubtitles: 'Мы бережно восстанавливаем вашу старую мебель, возвращая ей жизнь, прочность, красоту и функциональность' }
        ],
        singleProductTextContainerTitle: 'Искусство изысканной жизни',
        singleProductTextContainerTexts: [
            'Наша мебель – это не просто дизайн, это воплощение мастерства, элегантности и вневременного комфорта. Каждое изделие тщательно создается с использованием высококачественных материалов и отточенных технологий, сочетая эстетическую красоту с повседневной функциональностью.',
            'Каждая деталь тщательно продумана, от выбора высококачественных тканей и массивных деревянных конструкций до отделочных штрихов, которые придают гармонию и изысканность. В результате получается мебель, которая не только украшает ваш интерьер, но и повышает качество вашей жизни в целом.',
            'Помимо создания новых предметов мебели, мы специализируемся на реставрации и ремонте. Наши мастера возвращают к жизни изношенные и состаренные вещи, сохраняя их характер, восстанавливая прочность и внешний вид. Благодаря тщательной реставрации ваша мебель вновь обретает свою красоту и продолжает служить вам долгие годы. '
        ],

    },
    ENG: {
        NAV_LINKS: [
            { to: '/', label: 'Home' },
            { to: '/catalog', label: 'Catalog' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
        ],
        homeHeaderTitle: 'Upholstered furniture',
        homeHeaderTitleSpan: 'for a comfortable life',
        homeHeaderSubTitle: 'Sofas, armchairs and sets: comfortable, modern, high quality',
        homeTitle: 'Featured Collection',
        homeSubTitle: 'Discover our most coveted pieces, each telling a story of exceptional craftsmanship and timeless design.',
        products: [
            { id: "1", name: "Emerald Velvet Sofa", description: "Luxurious emerald green velvet sofa with elegant curves and golden metal legs.", price: "1.237.000", image: ["/images/sofa-emerald-1.png", "/images/sofa-emerald-2.png", "/images/sofa-emerald-3.png", "/images/sofa-emerald-4.png"], category: "sofas", material: ["velvet", "metal"], color: "emerald" },
            { id: "2", name: "Cognac Leather Armchair", description: "Mid-century style leather armchair in cognac color with high-quality wooden legs.", price: "694.000", image: ["/images/armchair-leather-1.png", "/images/armchair-leather-2.png", "/images/armchair-leather-3.png", "/images/armchair-leather-4.png"], category: "armchairs", material: ["leather", "wood"], color: "brown" },
            { id: "3", name: "Dark Blue Velvet Bed", description: "Luxurious velvet bed frame in dark blue with a tufted headboard and golden details.", price: "1.725.000", image: ["/images/bed-navy-1.png", "/images/bed-navy-2.png"], category: "beds", material: ["velvet", "metal"], color: "dark blue" },
            { id: "4", name: "Walnut Wood Cabinet", description: "Modern cabinet made of dark walnut wood with elegant copper handles.", price: "1.013.000", image: ["/images/cabinet-walnut-1.png", "/images/cabinet-walnut-2.png", "/images/cabinet-walnut-3.png"], category: "cabinets", material: ["wood", "metal"], color: "brown" },
            { id: "5", name: "Pink Velvet Bench", description: "Premium velvet bench in soft pink with golden metal legs.", price: "338.000", image: ["/images/bench-velvet-1.png", "/images/bench-velvet-2.png"], category: "benches", material: ["velvet", "metal"], color: "pink" },
            { id: "6", name: "Modern Storage Shelf", description: "Stylish modern shelf made of black metal and wood with an elegant industrial design.", price: "600.000", image: ["/images/storage-shelf-1.png", "/images/storage-shelf-2.png"], category: "storage", material: ["metal", "wood"], color: "gray" },
            { id: "7", name: "Dark Gray Sectional Sofa", description: "Modern L-shaped sofa made of gray fabric with clean and minimalist lines.", price: "1.837.000", image: ["/images/sofa-sectional-1.png", "/images/sofa-sectional-2.png", "/images/sofa-sectional-3.png"], category: "sofas", material: ["fabric"], color: "gray" },
            { id: "8", name: "Burgundy Velvet Armchair", description: "Luxurious armchair made of deep burgundy velvet with a curved back and golden frame.", price: "487.000", image: ["/images/armchair-velvet-1.png", "/images/armchair-velvet-2.png", "/images/armchair-velvet-3.png"], category: "armchairs", material: ["velvet", "metal"], color: "burgundy" }
        ],
        productsColor: 'color',
        productsMaterial: 'material',
        productsPrice: 'price',
        productCardLinkName: 'View details',
        homeLinkCatalog: 'view all products',
        homePageAboutContainerIcons: [
            { src: 'FaLeaf', oneSubtitle: 'Sustainable', twoSubtitles: 'Eco-friendly materials' },
            { src: 'FaHammer',  oneSubtitle: 'Handcrafted',  twoSubtitles: 'Artisan quality' },
            { src: 'FaHeart', oneSubtitle: 'Timeless', twoSubtitles: 'Classic designs', }
        ],
        homePageAboutTitle: 'We create furniture with soul',
        homeLinkAbout: 'more about us',
        homePageAboutSubtitle: [
            'Our furniture workshop is a team of experienced craftsmen who have been producing high-quality custom furniture for many years. We create products that combine comfort, reliability, and modern elegant design.',
            'The main focus of our work is the production of upholstered and cabinet furniture made according to individual orders. We manufacture sofas, armchairs, beds, doors, kitchen furniture, and other interior elements, taking into account all the wishes of our clients.',
            'Each order for us is an individual project. Clients can choose the design, size, materials, fabrics, and colors so that the furniture perfectly fits their home, apartment, or office. Our craftsmen carefully work on every detail to ensure that the finished product is high-quality, durable, and comfortable to use.',
            'In our work we use only proven materials and modern production technologies. Thanks to this, our furniture serves for many years while maintaining its appearance and comfort.',
            'Our goal is to create furniture that makes a home more cozy and beautiful. We value the trust of our clients and always strive to provide the best quality, precise workmanship, and an individual approach to every order.'
        ],
        homePageContactTitle: 'Contact us',
        homePageContactSubtitle: 'We are always happy to help you choose furniture',
        homePageContactContainerIcons: [
            { src: 'FiPhone',  oneSubtitle: 'Telephone',  twoSubtitles: '099-04-75-14'},
            { src: 'RiFacebookBoxLine', oneSubtitle: 'Facebook',  twoSubtitles: 'https://www.facebook.com/'},
            { src: 'IoLogoInstagram', oneSubtitle: 'Instagram', twoSubtitles: 'https://www.instagram.com/'},
            { src: 'LuMapPin', oneSubtitle: 'Address', twoSubtitles: 'Echmiadzin city, Araratyan street, 27'}
        ],
        aboutHeaderTitle: 'Comfort created especially for you',
        aboutHeaderSubTitle: 'About us',
        aboutSectionInfoTitle: 'About us - comfort created especially for you',
        aboutSectionInfoText: [
            'Our furniture workshop is a team of experienced craftsmen who create high-quality custom-made upholstered furniture. We combine professionalism, modern technology, and attention to detail to ensure that each piece is not only beautiful but also extremely comfortable.',
            'We manufacture sofas, armchairs, beds, doors, kitchen furniture, and other interior elements of any complexity. You can choose the design, size, materials, and color—we\'ll create furniture that will fit perfectly into your interior.',
            'Each piece is handcrafted by experienced artisans using reliable materials and proven technologies. We place special emphasis on the quality, durability, and comfort of our furniture.',
            'We believe that furniture should not only decorate a home but also create a cozy and comfortable atmosphere. That\'s why we approach every order with care and professionalism.',
            'Contact us to discuss your project and we will create furniture that is perfect for you.'
        ],
        aboutSectionInfoItemsSmallTitle: 'What Sets Us Apart',
        aboutSectionInfoItemsTitle: 'The Pillars of Our Craft',
        aboutSectionInfoItems: [
            { src: 'LuPalette', oneSubtitle: 'Custom Design', twoSubtitles: 'Every piece is tailored to your unique vision and space requirements.' },
            { src: 'FiLayers', oneSubtitle: 'Premium Materials', twoSubtitles: 'Extensive selection of the finest fabrics, leathers, and hardwoods.' },
            { src: 'LuUsers', oneSubtitle: 'Expert Craftsmen', twoSubtitles: 'Decades of experience in traditional and modern furniture making.' },
            { src: 'LuShield', oneSubtitle: 'Built to Last', twoSubtitles: 'Superior construction techniques ensure generations of enjoyment.' }
        ],
        aboutSectionInfoList: [
            'Custom-made furniture according to your wishes',
            'Wide selection of fabrics, colors, and materials',
            'Experienced craftsmen with many years of experience',
            'High-quality and durable designs',
            'Attention to every detail'
        ],
        aboutSectionInfoListSubTitle: 'Why Choose Us',
        aboutSectionInfoListTitle: 'A Partnership Built on Trust',
        aboutSectionInfoListText: 'When you choose us, you are not just buying furniture — you are investing in pieces that will become part of your family\'s story. Our commitment to excellence extends from the first consultation to years after delivery.',
        contactHeaderTitle: 'Contact us',
        contactHeaderSubTitle: 'We are always ready to help you with choosing furniture, repairing old furniture, and will be happy to answer all your questions',
        contactPageIframeTitle: 'How to find us',
        contactInfoTitle: 'Ready to discuss your project?',
        contactInfoText: 'We\'re ready to help bring your ideas to life using premium materials and craftsmanship, and we also offer professional furniture repair',
        contactPageButtonText: 'Contact us',
        catalogHeaderTitle: 'Custom furniture catalog',
        catalogHeaderSubTitle: 'Discover handcrafted sofas, armchairs, beds and premium furniture pieces',
        categories: [
            { id: 'all', label: 'All Categories' },
            { id: "sofas", label: "Sofas" },
            { id: "armchairs", label: "Armchairs" },
            { id: "beds", label: "Beds" },
            { id: "cabinets", label: "Cabinets" },
            { id: "benches", label: "Benches" },
            { id: "storage", label: "Storage rack" },
        ],
        catalogCategoriesTitle: 'Our Collection',
        catalogCategoriesSubTitle: 'Browse our curated selection of premium furniture pieces, each crafted with exceptional attention to detail',
        filtersName: 'Filters',
        catalogIndicativeGoods: [
            { id: '9', name: 'Teal Chesterfield Sofa', description: 'An elegant Chesterfield sofa with deep carriage stitching, finished in a rich turquoise shade. It features curved armrests, decorative buttons, and a classic design with a modern twist.', src: '/teal-chesterfield-sofa.png' },
            { id: '10', name: 'Gray Upholstered Bed', description: 'This modern bed features a gray upholstered headboard and a minimalist geometric pattern. Its clean design, sturdy legs, and cozy aesthetic make it perfect for a contemporary bedroom.', src: '/gray-upholstered-bed.png' },
        ],
        catalogIndicativeGoodsPreface: {
            preface: 'Featured',
            title: 'Premium Pieces',
            subTitle: 'Discover our most distinguished furniture pieces, each representing the pinnacle of craftsmanship and design'
        },
        catalogFooterContent: {
            preface: 'INDIVIDUAL APPROACH',
            title: 'We make custom furniture',
            subTitle: 'We design and build furniture tailored to your interior. Our master craftsmen bring your vision to life with exceptional quality and attention to detail',
            linkText: 'Contact us',
        },
        buttonLoadMore: 'Load more products',
        footerTitle: 'Ordering Furniture',
        footerText: 'Premium custom furniture crafted with exceptional quality and attention to detail. Transform your space with our handcrafted pieces.',
        footerLinkTitle: 'Quick Links',
        footerContactTitle: 'Contact',
        singleProductCardTitleTextOne: 'Crafted for',
        singleProductCardTitleTextTwo: ' Excellence',
        singleProductCard: [
            { src: 'LuGem', oneSubtitle: 'Handcrafted', twoSubtitles: 'Each piece is carefully crafted by skilled artisans with decades of experience' },
            { src: 'PiTree', oneSubtitle: 'Premium Wood', twoSubtitles: 'Solid wood frames built to last for generations' },
            { src: 'LuShieldCheck', oneSubtitle: 'Durable', twoSubtitles: 'Designed for durability with reinforced joints and high-quality materials' },
            { src: 'LuPalette', oneSubtitle: 'Restoration', twoSubtitles: 'We carefully restore your old furniture, bringing it back to life with renewed strength, beauty, and functionality' }
        ],
        singleProductTextContainerTitle: 'The art of refined living',
        singleProductTextContainerTexts: [
            'Our furniture represents more than just design — it is a statement of craftsmanship, elegance, and timeless comfort. Each piece is thoughtfully created using premium materials and refined techniques, blending aesthetic beauty with everyday functionality.',
            'Every detail is carefully considered, from the selection of high-quality fabrics and solid wood structures to the finishing touches that bring harmony and sophistication. The result is furniture that not only enhances your interior but elevates your entire living experience.',
            'In addition to creating new pieces, we specialize in the restoration and repair of furniture. Our artisans bring worn and aged items back to life, preserving their character while renewing their strength and appearance. Through careful restoration, your furniture regains its beauty and continues to serve you for years to come.'
        ],

    }
}