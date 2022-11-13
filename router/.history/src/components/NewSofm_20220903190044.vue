<template>
  <div>
    <ul>
        <li :style="{opacity}">
            欢迎学习Vue
        </li>
        <li>
            <a>newmessage1</a> <input type="text"> &nbsp;&nbsp;
        </li>
        <li>
            <a>newmessage1</a> <input type="text"> &nbsp;&nbsp;
        </li>
        <li>
            <a>newmessage1</a> <input type="text"> &nbsp;&nbsp;
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NewSofm',
    data(){
        return{
            opacity: 1
        }
    },
    mounted(){
        this.timer = setTimeout(()=>{
            this.opacity -=0.1
            if(this.opacity <= 0){
                this.opacity = 1
            }
        },100)
    }
}
</script>