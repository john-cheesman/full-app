<template>
    <div id="about-you">
        <h1>About you</h1>

        <form>
            <div class="form-row">
                <div>
                    <label for="first-name">First name</label>
                </div>

                <div>
                    <input type="text" name="first-name" />
                </div>
            </div>

            <div class="form-row">
                <div>
                    <label for="second-name">Second name</label>
                </div>

                <div>
                    <input type="text" name="second-name" />
                </div>
            </div>

            <div class="form-row">
                <div>
                    <label for="dob">Date of birth</label>
                </div>

                <div>
                    <input type="date" name="dob" />
                </div>
            </div>
        </form>

        <router-link to="/">Back</router-link>
        <router-link to="/thank-you">Submit</router-link>
    </div>
</template>

<script>
    export default {
        name: 'about-you',

    }

</script>

<style scoped>
    .form-row {
        margin-bottom: 1.5rem;
    }

    input {
        height: 1.5rem;
    }
</style>
