const app = new Vue({
	el: "#app",
	data: {
		titulo: "Tareas con VUE js",
		tareas: [],
		nuevaTarea: "",
		nuevaDescripcionTarea: "",
		mensaje: "",
	},
	methods: {
		agregar() {
			this.mensaje = "";
			if (this.nuevaTarea != "") {
				this.tareas.push({
					nombre: this.nuevaTarea,
					descripcion: this.nuevaDescripcionTarea,
					estado: false,
				});
				this.nuevaTarea = "";
				this.nuevaDescripcionTarea = "";
				this.mensaje = "";
				localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			} else {
				this.mensaje = "los campos son obligatorios";
			}
		},
		editartarea(event, index) {
			this.tareas[index].estado = true;
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
		},
		eliminartarea(event, index) {
			this.tareas.splice(index, 1);
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
		},
	},
	created: function () {
		let datosDB = JSON.parse(localStorage.getItem("tareas-vue"));
		console.log(datosDB);
		if (datosDB === null) {
			this.tareas = [];
		} else {
			this.tareas = datosDB;
		}
	},
});
