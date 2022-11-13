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
    deactivated(){
        clearInterval(this.timer)
    },
    activated(){
        this.timer = setInterval(()=>{
            this.opacity -= 0.01
            if(this.opacity <= 0){
                this.opacity = 1
            }
        },20)
    }
}
</script>