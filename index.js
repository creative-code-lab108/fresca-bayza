// بيانات المنتجات
const products = [


// 


    {
    id: 23,
    name: "عيب علينا",
    des: " فريسكا حادق + فريسكا نوتيلا + وافل نوتيلا",
    image: "ab.jpg",
    oldPrice: 170,   // السعر القديم
    newPrice: 120,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 24,
    name: "الشقاوة",
    des: "فريسكا تركي لانشون + فريسكا لوتس + نص وافل نوتيلا + موهيتو ليمون نعناع ",
    image: "sha.jpg",
    oldPrice: 175,   // السعر القديم
    newPrice: 125,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 25,
    name: "البوظان",
    des: " فريسكا فانتزيا و فريسكا تركي لانشون و 25 قطعة بان كيك و الشديدة",
    image: "bau.jpg",
    oldPrice: 270,   // السعر القديم
    newPrice: 220,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 26,
    name: "السوبر هاتريك",
    des: " 4 فريسكا (وايت و نوتيلا و لوتس و كيندر)",
    image: "su.jpg",
    oldPrice: 145,   // السعر القديم
    newPrice: 100,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 27,
    name: "عرض الصيف",
    des: " وافل ايس كريم و 3 فريسكا (وايت و نوتيلا و لوتس) و 25 قطعة بان كيك",
    image: "se.jpg",
    oldPrice: 315,   // السعر القديم
    newPrice: 250,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 28,
    name: "الفوقان ",
    des: " فريسكا و وافل بكريمة القهوة و ايس كوفي",
    image: "fa.jpg",
    oldPrice: 225,   // السعر القديم
    newPrice: 180,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 29,
    name: "اللمة ",
    des: "2 فريسكا تركي لانشون / بسطرمة و 25 قطعة بان كيك و 2 فريسكا فانتزيا و 2 وافل ملظلظ",
    image: "la.jpg",
    oldPrice: 550,   // السعر القديم
    newPrice: 450,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 30,
    name: "الروقان ",
    des: " فريسكا نوتيلا + ميلك شيك لوتس",
    image: "ra.jpg",
    oldPrice: 130,   // السعر القديم
    newPrice: 90,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 31,
    name: "الروقان 2 ",
    des: "موهيتو + الشديدة ",
    image: "ra2.jpg",
    oldPrice: 150,   // السعر القديم
    newPrice: 100,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},
    {
    id: 32,
    name: "عرض البيرفيتو",
    des: " 25 قطعة بان كيك و 3 فريسكا (وايت و نوتيلا و لوتس)",
    image: "ber.jpg",
    oldPrice: 210,   // السعر القديم
    newPrice: 160,   // السعر الجديد
    category: "عروض",
    isOffer: true   // علشان يظهر في صفحة العروض
},





    // فريسكا
      
          {
        id: 1,
        name: "فريسكا كلاسيك",
        des: " ",
        image: "heee.jpg",
        weights: ["ساده","عسل ابيض","عسل اسود"],
        prices: [10,15,15],
        category: "الفريسكا"
    },
          {
        id: 2,
        name: "فريسكا",
        des: " ",
        image: "feres.jpg",
        weights: ["كراميل","نوتيلا","وايت","لوتس","كيندر","فريرو روشيه","رفايلو","بيستاشيو"],
        prices: [25,25,30,30,35,40,40,50],
        category: "الفريسكا"
    },
          {
        id: 3,
        name: "فريسكا حلو (Normal)",
        des: " ",
        image: "hal.jpg",
        weights: ["تورتا","مارشميللو","كاو بوي","نيو كراميلو","بيمبو","ترافل","رولانا","تيبو","لارش","كتاكيتو"],
        prices: [20,20,20,20,20,25,25,25,30,30],
        category: "الفريسكا"
    },
          {
        id: 4,
        name: "فريسكا حلو (Extra)",
        des: " ",
        image: "hal.jpg",
        weights: ["تورتا","مارشميللو","كاو بوي","نيو كراميلو","بيمبو","ترافل","رولانا","تيبو","لارش","كتاكيتو"],
        prices: [20,20,20,20,20,25,25,25,30,30],
        category: "الفريسكا"
    },
          {
        id: 5,
        name: "فريسكا ميكس (Normal)",
        des: " ",
        image: "mee.jpg",
        weights: ["موف اون (مارشميللو صوص فاكهة) ","شوجر مامي (مارشميللو صوص فاكهة تورتا)","دوبامين (موز + كراميل + نوتيلا) ","فانتازيا (وايت شوكلت + صوص فاكهة)","المشقوطة (رولانا - نيو كراميلو - كيندر )","المؤدبة (تورتا + رولانا + صوص فاكهة)","باربي (مارشميللو + رولانا + صوص فاكهة)","شوجر دادي (تورتا + بيمبو + نوتيلا)","دبي (كنافة بستاشيو)"],
        prices: [25,35,35,35,35,40,40,40,50],
        category: "الفريسكا"
    },
          {
        id: 6,
        name: "فريسكا ميكس (Extra)",
        des: " ",
        image: "mee.jpg",
        weights: ["موف اون (مارشميللو صوص فاكهة) ","شوجر مامي (مارشميللو صوص فاكهة تورتا)","دوبامين (موز + كراميل + نوتيلا) ","فانتازيا (وايت شوكلت + صوص فاكهة)","المشقوطة (رولانا - نيو كراميلو - كيندر ))","بامبينو (بيمبو + صوص الفاكهة)","(فيتنس (بيمبو + مارشميلو + صوص فاكهة","(كافيين (الكريمة قهوة ","مالديف (موز + وايت شوكلت + صوص فاكهة)","المؤدبة (تورتا + رولانا + صوص فاكهة)","باربي (مارشميللو + رولانا + صوص فاكهة)","شوجر دادي (تورتا + بيمبو + نوتيلا)","دبي (كنافة بستاشيو)","5G (كيندر + موز)","13 (ميكس تورتا كيندر كارميل)"],
        prices: [30,40,40,40,50,35,40,40,40,50 ,50 ,60 ,60,60,60 ],
        category: "الفريسكا"
    },


              {
        id: 7,
        name: "فريسكا حادق (Normal)",
        des: " ",
        image: "hade.jpg",
        weights: ["شيدر","تركي","ميكس جبن","تركي لانشون","عصاميات (تركي + لانشون + عسل ابيض)","تركي بسطرمة","تركي مدخن","فريسكا بايظة (تركي + لانشون + بسطرمة)"],
        prices: [20,25,35,35,40,50,40,60  ],
        category: "الفريسكا"
    },
              {
        id: 8,
        name: "فريسكا حادق (Extra)",
        des: " ",
        image: "hade.jpg",
        weights: ["شيدر","ميكس جبن","فريسكا بايظة (تركي + لانشون + بسطرمة)"],
        prices: [30,50,70 ],
        category: "الفريسكا"
    },




    // وافل


    {
        id: 9,
        name: "وافل حلو (Round)",
        des: "",
        image: "wa.jpg",
        weights: ["نوتيلا","كراميل","وايت شوكلت","لوتس", "نوتيلا مارشميللوو ", "بينا كولادا","كيندر","نايت موود","الشديدة","فور سيزون","بيستاشيو","الملظلظ","دبي",],
        prices: [80,80,90,90, 100, 100, 120, 100, 150, 130, 150, 150, 170],
        category: "الوافل"
    },



    {
        id: 10,
        name: "وافل حلو (Half)",
        des: "",
        image: "wa2.jpg",
        weights: ["نوتيلا","كراميل","وايت شوكلت","لوتس", "نوتيلا مارشميللوو ", "بينا كولادا","كيندر","نايت موود","الشديدة","فور سيزون","بيستاشيو","الملظلظ","دبي",],
        prices: [50,50,60,60, 60, 60, 70, 70, 80, 90, 100, 80, 100],
        category: "الوافل"
    },
    {
        id: 11,
        name: "وافل حادق",
        des: "شيدر + لانشون + بيج تيستي",
        image: "wa3.jpg",
        weights: ["Round","Half"],
        prices: [100,65],
        category: "الوافل"
    },



    {
        id: 12,
        name: "وافل حادق",
        des: "تركي + لانشون + بسطرمة + شيدر ",
        image: "wa4.jpg",
        weights: ["Round","Half"],
        prices: [150,90],
        category: "الوافل"
    },


    // بان كيك

    {
        id: 13,
        name: "بان كيك نوتيلا ",
        des: "اسعار لفترة محدودة  ",
        image: "ba1.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 14,
        name: "بان كيك لوتس ",
        des: "اسعار لفترة محدودة  ",
        image: "ba2.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 15,
        name: "بان كيك وايت ",
        des: "اسعار لفترة محدودة  ",
        image: "ba4.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 16,
        name: "بان كيك فراولة ",
        des: "اسعار لفترة محدودة  ",
        image: "ba6.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 17,
        name: "بان كيك توت ",
        des: "اسعار لفترة محدودة  ",
        image: "ba7.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 18,
        name: "بان كيك كيندر ",
        des: "اسعار لفترة محدودة  ",
        image: "ba9.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [50,100,110,120],
        category: "بان كيك"
    },
    {
        id: 19,
        name: "بان كيك بستاشيو ",
        des: "اسعار لفترة محدودة  ",
        image: "ba8.jpg",
        weights: ["8 قطع"," 15 قطع"],
        prices: [80,130],
        category: "بان كيك"
    },











        {
        id: 20,
        name: "ice cofee",
        des: "ملهوش وصف",
        image: "ice.jpg",
        weights: ["نوتيلا", "كراميل", "كلاسيك"],
        prices: [75, 75, 65],
        category: "المشروبات"
    },
    {
        id: 21,
        name: "Milk Shake",
        des: " احلي حاجة ممكن تشربها",
        image: "milk.jpg",
        weights: ["فراولة","بلوبيري","بطيخ","مانجو","نوتيلا","لوتس", "كراميل","كيندر","باشون فروت","بستاشيو", "ريمونتادا (مانجو - فراولة)","افاتار (مانجو + بلوبيري)"],
        prices: [65,65,65,65, 70, 75 ,75,90,75,120,75,75],
        category: "المشروبات"
    },
    {
        id: 22,
        name: "Mojito",
        des: "طعم الانتعاش",
        image: "moji.jpg",
        weights: ["ليمون نعناع ","بلوبيري","فراولة","بطيخ", "باشون فروت", "كيوي","كيوي ليمون","اناناس","اناناس ليمون","بينا كولادا","فلوريدا (بطيخ - نعناع - ليمون)"],
        prices: [30,40,40,40, 45, 45,50,45,50,50,45],
        category: "المشروبات"
    },





];





// ---- حالة السلة ----
let cart = [];

// ---- مساعدة لتفعيل لينك الناف ----
function setActiveLink(el) {
    document.querySelectorAll('.nav-links li a').forEach(link => link.classList.remove('active'));
    if (el) el.classList.add('active');
}

// ---- عرض المنتجات (آمن للمنتجات اللي فيها أوزان واللي مافيهاش) ----
function displayFilteredProducts(filteredProducts) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";

    if (!filteredProducts || filteredProducts.length === 0) {
        productsDiv.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>لا توجد نتائج مطابقة للبحث</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const hasWeights = Array.isArray(product.weights) && Array.isArray(product.prices);
        let weightsHTML = "";
        if (hasWeights) {
            weightsHTML = product.weights.map((weight, index) =>
                `<option value="${index}">${weight} - ${product.prices[index]} جنيه</option>`
            ).join('');
        }
        const priceFallback = product.newPrice ?? product.oldPrice ?? product.price ?? 0;
        const selectHTML = hasWeights
            ? `<select id="weight-${product.id}">${weightsHTML}</select>`
            : `<div class="single-price">${priceFallback} جنيه</div>`;

        const onclickFn = hasWeights ? `addToCart(${product.id}, this)` : `addOfferToCart(${product.id}, this)`;

        productsDiv.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" class="product-img" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${product.des ? `<p class="product-des">${product.des}</p>` : ""}
                    ${selectHTML}
                    <button onclick="${onclickFn}">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
        `;
    });
}

// ------- دوال العرض والفلترة -------
function displayProducts(productsToShow = products) {
    displayFilteredProducts(productsToShow);
}

function filterProducts(category, el = null) {
    if (!category || category === "الكل") {
        displayCategoriesGrid();
    } else if (category === "كل المنتجات") {
        // هنا بنعرض كل المنتجات ماعدا العروض
        const withoutOffers = products.filter(p => !p.isOffer);
        displayProducts(withoutOffers);
    } else {
        // باقي الفئات
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }

    // تحديث الـ active link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.classList.remove('active');
    });
    if (el) {
        el.classList.add('active');
    }
}


// ------- صور الأقسام -------
function getCategoryImage(category) {
    const catProduct = products.find(p => p.category === category);
    return catProduct ? catProduct.image : 'default-image.jpg';
}

function displayCategoriesGrid() {
    const productsDiv = document.getElementById("products");
    const uniqueCategories = [...new Set(products.map(p => p.category))];

    productsDiv.innerHTML = `
        <div class="modern-categories">
            
            <!-- ✅ قسم العروض أول واحد -->
            <div class="category-box" onclick="showOffers(null)">
                <div class="category-overlay"></div>
                <img src="ofer.jpg" alt="عروض"> <!-- هنا حط صورة قسم العروض -->
                <h3>العروض</h3>
                <div class="category-products-count">
                    ${products.filter(p => p.isOffer).length} عروض
                </div>
            </div>

            <!-- ✅ باقي الأقسام -->
            ${uniqueCategories
                .filter(category => category !== "عروض") // استبعاد العروض عشان مايتكررش
                .map(category => `
                    <div class="category-box" onclick="filterProducts('${category}', null)">
                        <div class="category-overlay"></div>
                        <img src="${getCategoryImage(category)}" alt="${category}">
                        <h3>${category}</h3>
                        <div class="category-products-count">
                            ${products.filter(p => p.category === category).length} منتجات
                        </div>
                    </div>
                `).join('')}
        </div>
    `;
}




// ------- البحث -------
// ------- البحث ------- 
function liveSearch() {
    let searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm === "") {
        // لو مفيش كتابة نعرض كل المنتجات ما عدا العروض
        const withoutOffers = products.filter(p => !p.isOffer);
        displayProducts(withoutOffers);
        return;
    }

    // نحذف المسافات عشان البحث يكون مرن
    searchTerm = searchTerm.replace(/\s+/g, "");

    const filteredProducts = products.filter(product => {
        if (product.isOffer) return false; // ✅ استبعاد العروض من البحث

        const name = (product.name || "").replace(/\s+/g, "");
        const category = (product.category || "").replace(/\s+/g, "");
        const des = (product.des || "").replace(/\s+/g, "");

        return (
            name.includes(searchTerm) ||
            category.includes(searchTerm) ||
            des.includes(searchTerm)
        );
    });

    displayFilteredProducts(filteredProducts);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    // ✅ عند مسح البحث نعرض المنتجات العادية فقط (بدون عروض)
    const withoutOffers = products.filter(p => !p.isOffer);
    displayProducts(withoutOffers);
}


function clearSearch() {
    document.getElementById('searchInput').value = '';
    displayProducts(products);
}

// ------- إضافة للسلة (آمن) -------
function addToCart(productId, btn = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let price = 0;
    let weight = "";

    if (Array.isArray(product.weights) && Array.isArray(product.prices)) {
        const sel = document.getElementById(`weight-${productId}`);
        const idx = sel ? parseInt(sel.value) : 0;
        weight = product.weights[idx] ?? "";
        price = Number(product.prices[idx] ?? 0);
    } else {
        // منتج بدون أوزان — استخدم newPrice أو oldPrice
        weight = "حجم واحد";
        price = Number(product.newPrice ?? product.oldPrice ?? product.price ?? 0);
    }

    cart.push({ id: product.id, name: product.name, weight, price });
    updateCart();

    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
            btn.style.backgroundColor = '';
        }, 1500);
    }
}

// ------- إضافة عروض للسلة -------
function addOfferToCart(productId, btn = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const price = Number(product.newPrice ?? product.oldPrice ?? product.price ?? 0);
    cart.push({ id: product.id, name: product.name, weight: "عرض خاص", price });

    updateCart();

    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
            btn.style.backgroundColor = '';
        }, 1500);
    }
}

// ------- تحديث السلة -------
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartCount || !cartTotal) return; // حماية لو العناصر مش موجودة

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li>
                <span>${item.name} (${item.weight})</span>
                <span>
                    ${item.price} جنيه 
                    <button onclick="removeItem(${index})" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </span>
            </li>
        `;
        total += Number(item.price);
    });

    cartTotal.textContent = `${total} جنيه`;
    cartCount.textContent = cart.length;
    // حفظ السلة في المتصفح
localStorage.setItem('cart', JSON.stringify(cart));

}

// ------- باقي الدوال (فتح السلة، إرسال الطلب...) -------
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function sendOrder() {
    if (cart.length === 0) {
        alert("السلة فارغة! أضف منتجات أولاً");
        return;
    }
    const modal = document.getElementById('customer-modal');
    if (modal) modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('customer-modal');
    if (modal) modal.classList.remove('active');
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;

    if (!/^01[0-9]{9}$/.test(phone)) {
        alert("رقم الهاتف يجب أن يكون 11 رقماً ويبدأ بـ 01");
        return;
    }

    let orderText = "🎉 طلبية جديدة من الموقع  🎉\n\n";
    orderText += `👤 العميل: ${name}\n`;
    orderText += `📱 الهاتف: ${phone}\n`;
    orderText += `📍 العنوان: ${address}\n\n`;
    orderText += "🛒 المنتجات:\n";

    cart.forEach(item => {
        orderText += `- ${item.name} (${item.weight}): ${item.price} جنيه\n`;
    });

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    orderText += `\n💰 الإجمالي: ${total} جنيه\n`;

    if (notes) orderText += `\n📝 الملاحظات: ${notes}\n`;
    orderText += "\nشكراً لثقتكم بنا ❤️";

    const phoneNumber = "201108585906";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderText)}`;

    window.open(whatsappUrl, "_blank");

    closeModal();
    cart = [];
    localStorage.removeItem('cart'); // إزالة السلة من المتصفح

    updateCart();
    
    alert("تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد التفاصيل.");
}

// ------- العروض مع تفعيل الـ active للينك -------
function showOffers(el = null) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = `
      <div class="offers-header">
        <h2 class="offers-title">🎉 عروض لفترة محدودة 🎉</h2>
        <div id="countdown"></div>
      </div>
      <div class="offers-grid"></div>
    `;
    const offersGrid = productsDiv.querySelector(".offers-grid");
    const offers = products.filter(p => p.isOffer);

    if (offers.length === 0) {
        offersGrid.innerHTML = "<p>لا يوجد عروض حالياً</p>";
        setActiveLink(el);
        return;
    }

offers.forEach(product => {
    offersGrid.innerHTML += `
      <div class="offer-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        ${product.des ? `<p class="offer-des">${product.des}</p>` : ""}
        <div class="prices">
          <span class="old-price">${product.oldPrice ?? ''} جنيه</span>
          <span class="new-price">${product.newPrice ?? ''} جنيه</span>
        </div>
        <button onclick="addOfferToCart(${product.id}, this)" class="offer-btn">
          <i class="fas fa-cart-plus"></i> أضف للسلة
        </button>
      </div>
    `;
});


    // لو عندك دالة للكاونت داون خلّيها تشتغل، وإلا تجاهل
    if (typeof startCountdown === 'function') startCountdown("Aug 31, 2025 23:59:59");

    setActiveLink(el);
}

// ------- تشغيل عند تحميل الصفحة -------
window.onload = function () {
    displayCategoriesGrid();
    // استرجاع السلة لو موجودة
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
}

    const overlay = document.getElementById('cart-overlay');
    if (overlay) overlay.addEventListener('click', toggleCart);

    // حماية لو العناصر مش موجودة
    const menuBtn = document.getElementById('menuBtn');
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && menuIcon && navLinks) {
        menuBtn.addEventListener('click', function toggleMenu() {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        document.addEventListener('click', function (event) {
            if (window.innerWidth <= 992 &&
                !event.target.closest('.nav-container') &&
                !event.target.closest('.menu-btn') &&
                navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    navLinks.classList.remove('active');
                    if (menuIcon) { menuIcon.classList.remove('fa-times'); menuIcon.classList.add('fa-bars'); }
                }
            });
        });
    }
};
// قائمة الصوصات الإضافية
const extraSauces = [
    { name: "نوتيلا", price: 10 },
    { name: "كراميل", price: 10 },
    { name: "لوتس", price: 15 },
    { name: "كيندر", price: 20 },
    { name: "بستاشيو", price: 30 }
];

// تعديل عرض المنتجات عند وجود فريسكا حلو (Extra)
function displayFilteredProducts(filteredProducts) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";

    if (!filteredProducts || filteredProducts.length === 0) {
        productsDiv.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>لا توجد نتائج مطابقة للبحث</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const hasWeights = Array.isArray(product.weights) && Array.isArray(product.prices);
        let weightsHTML = "";
        if (hasWeights) {
            weightsHTML = product.weights.map((weight, index) =>
                `<option value="${index}">${weight} - ${product.prices[index]} جنيه</option>`
            ).join('');
        }
        const priceFallback = product.newPrice ?? product.oldPrice ?? product.price ?? 0;

        let sauceHTML = "";
        if (product.name.includes("حلو (Extra)")) {
            sauceHTML = `
                <label>اختر صوص إضافي:</label>
                <select id="sauce-${product.id}">
                    <option value="">بدون صوص</option>
                    ${extraSauces.map((s, i) => `<option value="${i}">${s.name}-${s.price} جنيه</option>`).join('')}
                </select>
            `;
        }

        const selectHTML = hasWeights
            ? `<select id="weight-${product.id}">${weightsHTML}</select>`
            : `<div class="single-price">${priceFallback} جنيه</div>`;

        const onclickFn = hasWeights || product.name.includes("حلو (Extra)")
            ? `addSweetExtraToCart(${product.id}, this)` 
            : `addOfferToCart(${product.id}, this)`;

        productsDiv.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" class="product-img" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${product.des ? `<p class="product-des">${product.des}</p>` : ""}
                    ${selectHTML}
                    ${sauceHTML}
                    <button onclick="${onclickFn}">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
        `;
    });
}

// دالة إضافة الفريسكا الحلو (Extra) مع الصوص
function addSweetExtraToCart(productId, btn = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let weight = "حجم واحد";
    let idx = 0;
    if (product.weights) {
        const sel = document.getElementById(`weight-${product.id}`);
        idx = sel ? parseInt(sel.value) : 0;
        weight = product.weights[idx] ?? "حجم واحد";
    }

    let price = product.prices[idx] ?? product.newPrice ?? product.oldPrice ?? 0;

    // الصوص الإضافي
    const sauceSel = document.getElementById(`sauce-${product.id}`);
    let sauceText = "";
    if (sauceSel && sauceSel.value !== "") {
        const sauce = extraSauces[sauceSel.value];
        price += sauce.price;
        sauceText = ` + ${sauce.name}`;
    }

    cart.push({ id: product.id, name: product.name, weight: weight + sauceText, price });
    updateCart();

    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
            btn.style.backgroundColor = '';
        }, 1500);
    }
}
