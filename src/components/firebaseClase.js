//codigo copiado en clase, no se usa
const {firestore} = this.props;

const ref = firestore.collection("/venta")
.where("sucursal", "==", "LOPEZMATEOS")
.orderBy("numeroOrden")
.get()
.then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        //doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "=>", doc.data());
    });
    
}).catch(function(error){
    console.log("Error getting document: ", error);
})
