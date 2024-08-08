function newCar(araba) {
  const yeniAraba = { ...araba };
  const modelParcalari = araba.model.split(' ');
  //split(' ') metodu, bu string'i boşluk karakterlerinden (' ') ayırarak bir diziye böler. Örneğin, "Toyota Corolla" string'i ["Toyota", "Corolla"] dizisine dönüştürülür.
  yeniAraba.marka = modelParcalari[0];
  //Bu özellik, modelParcalari dizisinin ilk elemanı olan markayı (modelParcalari[0]) alır. Yukarıdaki örnekte, bu "Toyota" olacaktır.
  yeniAraba.model = modelParcalari.slice(1).join(' ');
  //slice(1) diyor yani ilk elemanı atlayarak sonraki tüm elamanları alıyor ve join(" ") metodu bi dizeyi stringe çeviriyor. Örneğin, ["Corolla"] dizisi "Corolla" string'ine dönüştürülür.
  delete yeniAraba.yas;

  yeniAraba.otv = araba.fiyat < 1450000 ? 10 : 40;
  //Koşul Operatörü (? :): Bu operatör, koşula bağlı olarak farklı değerler döndüren kısa bir if-else yapısıdır.
  //Eğer araba.fiyat < 1450000 koşulu doğru (true) ise, otv değeri 10 olarak atanır.
  //Eğer yanlış (false) ise, otv değeri 40 olarak atanır.

  yeniAraba.mtv = araba.yas <= 10 ? 1773 : 520;
  yeniAraba.isDomestic = yeniAraba.marka.toLowerCase() === 'togg';
  //isDomestic yerli mi anlamı taşıyor burada böyle bir yeni özellik ekliyoruz yeniAraba.isDomestic diyerek. yeniAraba togg a eşitse yerli olur true döner.

  return yeniAraba;
}
