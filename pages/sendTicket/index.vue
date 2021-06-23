<template>
  <div>
    <v-form ref="myForm" v-model="isFormValid" @submit.prevent="submitHandler">
      <v-text-field
        v-model="subject"
        dense
        :rules="[formRules.required]"
        placeholder="Subject"
        background-color="cardColor"
        outlined
        class="pa-2"
      ></v-text-field>
      <v-textarea
        v-model="desc"
        class="mt-0"
        outlined
        dense
        :rules="[formRules.required]"
        placeholder="Your Ticket Message..."
        background-color="cardColor"
        height="20em"
      ></v-textarea>
      <div :style="{ width: '40em' }" class="file-input">
        <v-file-input
          label="attach file"
          accept="image/*"
          dense
          outlined
          background-color="teal"
          color="white"
          show-size
          chips
          clearable
        ></v-file-input>
      </div>

      <div class="d-flex flex-row-reverse">
        <v-btn
          :loading="isLoading"
          color="primary"
          dark
          class="pa-3 text-body-2"
          type="submit"
          >Submit</v-btn
        >
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      isFormValid: true,
      subject: '',
      desc: '',
    }
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
        },
      }
    },
  },
  methods: {
    submitHandler() {
      this.$refs.myForm.validate()
      if (this.isFormValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
