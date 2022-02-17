import { render } from 'utils/test-utils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
