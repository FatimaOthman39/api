// رابط البيانات
const url = 'https://forkify-api.herokuapp.com/api/search?q=pizza';

// جلب البيانات من الرابط
fetch(url)
    .then(response => response.json()) // تحويل الاستجابة إلى JSON
    .then(data => {
        // التحقق من وجود نتائج
        if (data.recipes && data.recipes.length > 0) {
            data.recipes.forEach(recipe => {
                // استخراج الاسم والصورة لكل وصفة
                const name = recipe.title;
                const image = recipe.image_url;

                // إنشاء عناصر HTML
                const nameElement = document.createElement('h2');
                const imageElement = document.createElement('img');

                // تعيين النص والمصدر
                nameElement.textContent = name;
                imageElement.src = image;
                imageElement.alt = name;
                imageElement.style.width = '200px'; // يمكنك تعديل الحجم حسب الحاجة

                // إضافة العناصر إلى الصفحة
                document.body.appendChild(nameElement);
                document.body.appendChild(imageElement);
            });
        } else {
            console.log('لا توجد وصفات متاحة');
        }
    })
    .catch(error => console.error('خطأ في جلب البيانات:', error));
