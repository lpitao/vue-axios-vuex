<template>
  <div class="contact">
    <van-contact-list
        :list="list"
        @add="onAdd"
        @edit="onEdit"
    />
    <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
            :contact-info="editingContact"
            :is-edit="isEdit"
            @save="onSave"
            @delete="onDelete"
        />
    </van-popup>
  </div>
  
</template>

<script>
// @ is an alias to /src
import { ContactList, Toast,ContactEdit,Popup } from 'vant';
import axios from 'axios'

export default {
  name: 'contactlist',
  components:{
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [Popup.name]:Popup
  },
  data(){
    //   {
    //       id:1,
    //       name:'',
    //       tel:''
    //   }
      return {
          list:[],
          instance:null,//实例
          showEdit:false,//编辑弹窗的显示
          editingContact:{},//正在编辑的联系人数据
          isEdit: false, //新建编辑


      }
  },
  created(){
      this.instance = axios.create({
          baseURL:'http://localhost:9000/api',
          timeout: 1000
      })
      this.getList()
  },
  methods:{
      //获取联系人列表
      async getList(){
          let res = await this.$Http.getContactList()
          this.list = res.data
      },
      //添加联系人
      onAdd(){
          this.showEdit = true;
          this.isEdit = false
      },
      onEdit(info){
          this.showEdit = true;
          this.isEdit = true;
          this.editingContact = info
      },
      //保存联系人
      async onSave(info){
          if(this.isEdit){
              //编辑保存
              this.instance.put('/contact/edit',info).then( res => {
                  if(res.data.code === 200){
                       Toast('编辑成功');
                     this.showEdit = false
                     this.getList()
                  }
              }).catch( () => {
                  Toast('新建失败')
              })
          }else{
              //新建保存
            let res = await this.$Http.newContactJson( info )
            if(res.code === 200){
                Toast('新建成功');
                this.showEdit = false
                this.getList()
            }
            //   this.instance.post('/contact/new/json',info).then( res => {
            //       if(res.data.code === 200){
            //            Toast('新建成功');
            //          this.showEdit = false
            //          this.getList()
            //       }
            //   }).catch( () => {
            //       Toast('新建失败')
            //   })
          }
      },
      //删除联系人
      async onDelete(info){
            let res = await this.$Http.delContact(
                {
                    id:info.id
                }
            )
            if(res.code === 200){
                this.showEdit = false
                Toast('删除成功')
            }

        //   this.instance.delete('/contact',{
        //         params:{
        //             id:info.id
        //         }
        //     }).then(res => {
        //         if(res.data.code === 200){
        //             this.showEdit = false
        //             Toast('删除成功')
        //         }
        //     }).catch( () => {
        //         Toast('新建失败')
        //     })
      }
  }
}
</script>
