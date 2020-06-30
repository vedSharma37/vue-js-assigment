<template>

    <div class="row ProfileList">
          <div class="col-md-4 col-sm-3" v-for="(data,key) in tileDatas.characters" v-bind:key="key">
              <div class="profile">
                <img :src="data.image" :alt="data.name" :title="data.name">
                <div class="name">{{data.name}}</div>
                <ul class="details">
                    <li><span class="label">Status</span> <span class="value">{{data.status}}</span></li>
                    <li><span class="label">SPECIES</span> <span class="value">{{data.species}}</span></li>
                    <li><span class="label">GENDER</span> <span class="value">{{data.gender}}</span></li>
                    <li><span class="label">ORIGIN</span> <span class="value">{{data.origin.name}}</span></li>
                    <li><span class="label">LAST LOCATION</span> <span class="value">{{data.location.name}}</span></li>
                </ul>     
              </div>
         </div>   
    </div>
</template>

<script>
export default {

    name : 'SearchList',
    props: ["CharacterResultData"],
    data:function(){
        return{
            tileDatas: Array
        }
    },
    created() {
         this.tileDatas = this.CharacterResultData;
    },

}
</script>

<style scoped>
.profile {
    border: 1px solid;
    margin-bottom: 27px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px #000;
}

.profile img {width: 100%;}

.profile .name {
    background: rgba(0, 0, 0, 0.73);
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 27px;
    margin-top: -50px;
    z-index: 999;
    position: relative;
    padding-left: 20px;
    font-weight: 100;
}

.details {
    margin: 0;
    list-style: none;
    padding: 20px;
}

.details li {
    margin-bottom: 10px;
    border-bottom: 1px solid #ababab;
    padding-bottom: 10px;
}

.details li .label {
    font-weight: bold;
    float: left;
}

.details li .value {
    text-align: right;
    width: 100%;
    display: block;
    font-weight: 100;
}

.details li:last-child {
    border-bottom: none;
}

</style>