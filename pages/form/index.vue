<template>
  <div class="mt-n3">
    <v-card class="mt-6">
      <v-card-title class="text-body-1 font-weight-bold"
        >Form Elements</v-card-title
      >
      <v-card-text>
        <v-form
          ref="formRef"
          v-model="isFormValid"
          @submit.prevent="submitHandler"
        >
          <v-container>
            <v-row justify="space-between" dense>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="name"
                  :rules="[formRules.required]"
                  outlined
                  placeholder="enter name"
                  dense
                  light
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="email"
                  :rules="[formRules.required, formRules.isEmail]"
                  outlined
                  placeholder="enter email"
                  dense
                  light
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="password"
                  :rules="[formRules.minLength]"
                  outlined
                  placeholder="enter password"
                  type="password"
                  dense
                  light
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  :rules="[formRules.required]"
                  auto-grow
                  no-resize
                  outlined
                  placeholder="enter message"
                  dense
                  light
                  height="10em"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-select
                  v-model="interests"
                  :items="interestsItems"
                  label="select one field"
                  :rules="[formRules.required]"
                  outlined
                  dense
                  light
                ></v-select>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                v-for="checkbox in checkboxes"
                :key="checkbox.value"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
              >
                <v-checkbox
                  v-model="colors"
                  :value="checkbox.value"
                  color="orange orange-darken-1"
                  :label="checkbox.label"
                  dense
                  light
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-radio-group v-model="gender" row mandatory>
              <v-row dense>
                <v-col
                  v-for="radio in radios"
                  :key="radio.value"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  xl="2"
                >
                  <v-radio
                    color="teal lighten-2"
                    :value="radio.value"
                    :label="radio.label"
                    light
                    dense
                  ></v-radio>
                </v-col>
              </v-row>
            </v-radio-group>
            <v-row dense>
              <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <v-switch
                  v-model="toggleModel"
                  color="pink lighten-1"
                  label="toggle me"
                  light
                  dense
                ></v-switch>
              </v-col>
            </v-row>
            <v-btn
              class="primary white--text text-body-2 pa-4"
              type="submit"
              :loading="formLoading"
            >
              Submit
            </v-btn>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      formLoading: false,
      name: '',
      email: '',
      password: '',
      message: '',
      interests: '',
      interestsItems: [
        { text: 'HTML', value: 'html' },
        { text: 'CSS', value: 'css' },
        { text: 'JAVASCRIPT', value: 'js' },
      ],
      checkboxes: [
        {
          label: 'red-color',
          value: 'red',
        },
        {
          label: 'blue-color',
          value: 'blue',
        },
        {
          label: 'green-color',
          value: 'green',
        },
        {
          label: 'orange-color',
          value: 'orange',
        },
      ],
      colors: [],
      radios: [
        {
          label: 'female',
          value: 'female',
        },
        {
          value: 'male',
          label: 'male',
        },
      ],
      gender: '',
      toggleModel: true,
    }
  },
  fetch() {},
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
        isEmail: val => {
          if (!val.includes('@')) return 'enter valid email'
          return true
        },
        minLength: val => {
          if (val.trim().length < 6) return 'min length is 6'
          return true
        },
      }
    },
  },
  methods: {
    submitHandler() {
      this.$refs.formRef.validate()
      if (this.isFormValid) {
        this.formLoading = true
        setTimeout(() => {
          this.formLoading = false
        }, 2000)
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
