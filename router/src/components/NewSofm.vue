<template>
  <div>
    <ul>
        <li :style="{opacity}">
            欢迎学习Vue
        </li>
        <li>
            <a>newsofm1</a> <input type="text"> &nbsp;&nbsp;
        </li>
        <li>
            <a>newsofm2</a> <input type="text"> &nbsp;&nbsp;
        </li>
        <li>
            <a>newsofm3</a> <input type="text"> &nbsp;&nbsp;
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
    deactivated(){
        clearInterval(this.timer)
    },
    activated(){
        this.timer = setInterval(()=>{
            console.log(1)
            this.opacity -= 0.01
            if(this.opacity <= 0){
                this.opacity = 1
            }
        },20)
    }
}
</script>