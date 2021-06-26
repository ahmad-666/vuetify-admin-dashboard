<template>
  <v-container class="mt-n2">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card color="cardColor" class="pa-4">
          <v-form
            ref="profileForm"
            v-model="profileFormValid"
            @submit.prevent="submitHandler"
          >
            <v-row dense>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="company"
                  dense
                  outlined
                  label="company name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="username"
                  dense
                  outlined
                  label="username"
                  :rules="[formRules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="email"
                  dense
                  outlined
                  label="email"
                  :rules="[formRules.required, formRules.email]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="fName"
                  dense
                  outlined
                  label="first name"
                  :rules="[formRules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="lName"
                  dense
                  outlined
                  label="last name"
                  :rules="[formRules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="address"
                  dense
                  outlined
                  label="address"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="city"
                  dense
                  outlined
                  label="city"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="country"
                  dense
                  outlined
                  label="country"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="post"
                  dense
                  outlined
                  label="postal code"
                ></v-text-field>
              </v-col>
            </v-row>
            <div>
              <p class="titleColor--text text-subtitle-1 font-weight-medium">
                About Me
              </p>
              <p class="text-body-2 font-weight-light textColor--text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit quibusdam maiores optio sequi unde sunt
              </p>
            </div>
            <v-divider class="my-4"></v-divider>
            <v-btn
              type="submit"
              color="primary"
              class="py-3 px-6 font-weight-bold white--text primary-gradient"
              :loading="isLoading"
              >Save</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="pa-0" color="cardColor">
          <v-card-title class="pa-0">
            <v-img
              src="/imgs/pattern.jpg"
              width="100%"
              height="5em"
              cover
            ></v-img>
            <v-avatar class="avatar-border mt-n14 mx-auto" size="100">
              <v-img src="/imgs/profile.jpg" width="100%" height="100%"></v-img>
            </v-avatar>
          </v-card-title>
          <v-card-text class="px-4 mt-4 d-flex flex-column align-center">
            <h6 class="text-subtitle-1 font-weight-medium titleColor--text">
              Mike Andrew
            </h6>
            <p class="mt-1 font-weight-light textColor--text text-body-2">
              Ceo/Co-Founder
            </p>
            <p class="mt-4 font-weight-regular text-body-2 textColor--text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              officia dignissimos deleniti facere doloremque illum, reiciendis
              saepe odio blanditiis voluptate iusto hic atque cum cupiditate
              unde sed. Minima, laboriosam non.
            </p>
          </v-card-text>
          <v-card-actions
            class="px-4 d-flex align-center flex-wrap justify-center mt-n4"
          >
            <nuxt-link to="" class="ma-2">
              <v-btn fab color="red" small>
                <v-icon size="16" color="white">mdi-google</v-icon>
              </v-btn>
            </nuxt-link>
            <nuxt-link to="" class="ma-2">
              <v-btn fab color="blue" small>
                <v-icon size="16" color="white">mdi-twitter</v-icon>
              </v-btn>
            </nuxt-link>
            <nuxt-link to="" class="ma-2">
              <v-btn fab color="orange" small>
                <v-icon size="16" color="white">mdi-instagram</v-icon>
              </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      profileFormValid: true,
      company: '',
      username: '',
      email: '',
      fName: '',
      lName: '',
      address: '',
      city: '',
      country: '',
      post: '',
    }
  },
  computed: {
    formRules() {
      return {
        required(val) {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
        email(val) {
          if (!val.includes('@')) return 'invalid email'
          return true
        },
      }
    },
  },
  methods: {
    submitHandler() {
      this.$refs.profileForm.validate()
      if (this.profileFormValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.avatar-border {
  border: 0.2em solid rgb(103, 18, 164);
}
.clip-path {
  clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
}
</style>
