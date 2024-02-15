import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import SignInForm from './SignInForm'

const meta: Meta<typeof SignInForm> = {
  title: 'Auth/SignInForm',
  component: SignInForm,
}

export default meta

type Story = StoryObj<typeof SignInForm>

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const submitButton = canvas.getByRole('button', { name: /sign in/i })
    expect(submitButton).toBeDisabled()

    const emailInput = canvas.getByLabelText(/email/i)
    await userEvent.type(emailInput, 'gabriel@craftvalue.io', {
      delay: 10,
    })

    const passwordInput = canvas.getByLabelText(/password/i)
    await userEvent.type(passwordInput, '123456', {
      delay: 10,
    })

    const form = submitButton.parentElement;

    expect(form).toHaveFormValues({
      email: 'gabriel@craftvalue.io',
      password: '123456',
    })

    await userEvent.click(submitButton)
  }
}
export const Default2: Story = {
  args: {}
}

