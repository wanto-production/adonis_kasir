<script lang="ts">
  import { useForm } from '@inertiajs/svelte'

  let form = useForm({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    alert('submit')
    $form.post('/api/register')
  }
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<main class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
  <div class="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
    <!-- Header -->
    <h1 class="text-2xl font-semibold text-gray-800 text-center mb-2">Register</h1>
    <p class="text-gray-500 text-center mb-6">
      Please fill in the form below to create your account.
    </p>

    <!-- Form -->
    <form onsubmit={handleSubmit} class="space-y-6">
      <!-- Username -->
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
        <input
          id="username"
          type="text"
          bind:value={$form.username}
          placeholder="Enter your username"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          bind:value={$form.email}
          placeholder="Enter your email"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          id="password"
          type="password"
          bind:value={$form.password}
          placeholder="Enter your password"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <!-- Button -->
      <button
        type="submit"
        disabled={$form.processing}
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 transition-colors"
      >
        Register
      </button>
    </form>
  </div>
</main>
