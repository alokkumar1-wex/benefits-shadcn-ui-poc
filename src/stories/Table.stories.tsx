import type { Meta, StoryObj } from "@storybook/react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/index"

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Tables rely on semantic markup and do not enforce layout. Provide captions, headers with `scope`, and keep column counts manageable for responsive scenarios.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const INVOICES = [
  { id: "INV001", status: "Paid", amount: "$250.00", due: "Jan 5, 2025" },
  { id: "INV002", status: "Outstanding", amount: "$420.00", due: "Jan 15, 2025" },
  { id: "INV003", status: "Overdue", amount: "$1,200.00", due: "Dec 28, 2024" },
]

export const Playground: Story = {
  render: () => (
    <Table>
      <TableCaption>Latest billing activity.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Invoice</TableHead>
          <TableHead scope="col">Status</TableHead>
          <TableHead scope="col">Amount</TableHead>
          <TableHead scope="col">Due date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {INVOICES.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell scope="row">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.due}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="text-right">
            Total due
          </TableCell>
          <TableCell>$1,870.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

