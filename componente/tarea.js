Vue.component("tarea", {
	/*html*/
	template: `
<div>
<div class="mt-3" v-for="(tarea, index) of tareas">
    <div
        :class="['alert', tarea.estado ? 'alert-success' : 'alert-danger']"
        role="alert"
    >
        <div
            class="d-flex justify-content-between align-items-center"
        >
            <div>
                <h2>No. {{index}} {{tarea.nombre}}</h2>
                <p>{{tarea.descripcion}}</p>
            </div>
            <div>
                <button
                    v-if="!tarea.estado"
                    class="btn btn-success btn-sm"
                    @click="$emit('editar', $event, index)"
                >
                    OK
                </button>
                <button
                    class="btn btn-danger btn-sm"
                    @click="$emit('eliminar', $event, index)"
                >
                    X
                </button>
            </div>
        </div>
    </div>
</div>
</div>    
    `,
	props: {
		tareas: Array,
	},
	data() {
		return {
			nombre: "luis",
		};
	},
});
