import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'

import * as S from './styles'

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

type Values = {
  [field: string]: boolean | string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState<Values>(initialValues)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: boolean | string) => {
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <S.Items key={item.name}>
          <Heading line="bottom" lineColor="secondary">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(value) => handleChange(field.name, value)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                value={field.name}
                defaultChecked={field.name === values[item.name]}
                onCheck={() => handleChange(item.name, field.name)}
              />
            ))}
        </S.Items>
      ))}
      <Button size="medium" fullWidth onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
