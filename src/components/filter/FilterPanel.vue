<template>
    <div class="filter-section">
        
        <ul class="list-group" v-for="(filterdata, key) in filterDatas" :key="key" :data-key="key">
            <h4>{{ key }}</h4>
            <li class="list-group-item checkbox" v-for="(item, k) in filterdata" :key="k">
                <label><input type="checkbox" :value="item" @click="selectedItems">{{ item }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
// import {mapMutations}  from 'vuex'
export default {

    name: 'FilterPanel',

    props: ['alldata', 'changedData'],

    data:function(){
        return{
            filterDatas: Array,
            selectedval: {}
        }
    },
    watch : {

        alldata(){
            this.filterDatas = this.$props.alldata;
        }
        
    },
    methods:{

        selectedItems: function(e){
            let valSelected  = e.target.value,
                keySelected = e.target.parentElement.parentElement.parentElement.dataset.key;
                this.selectedval[keySelected] = this.selectedval[keySelected] || [];
            if(e.target.checked){
                this.selectedval[keySelected].push(valSelected);
                
            }else{
                 this.selectedval[keySelected].splice(keySelected, 1);
            }
            this.changedData(this.selectedval);
         }
    }
};
</script>

