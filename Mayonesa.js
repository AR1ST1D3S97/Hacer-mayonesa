module.exports = class Mayonesa {
      constructor (huevo, aceite, limon, sal) {
                  this.huevo=huevo;
                  this.aceite=aceite;
                  this.limon=limon;
                  this.sal=sal;
                  console.log("Para hacer mayonesa casera necesitaremos de " + huevo, aceite, limon,sal);
      } 

      ingredientes () {
        return this.mezcla_de_ingredientes();
      }

      mezcla_de_ingredientes () {
        return this.huevo + this.aceite + this.limon + this.sal;
      }
};
