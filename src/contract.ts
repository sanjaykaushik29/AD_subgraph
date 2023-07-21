import {
  CreateLaunchpad as AdminChangedEvent,
} from "../generated/Contract/Contract"
import { CreateLaunchpad, } from "../generated/schema"

export function handleAdminCreateLaunchpad(event: AdminChangedEvent): void {
  let entity = new CreateLaunchpad(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.collection = event.params.collection

  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.contractURI = event.params.contractURI
  entity.maxSupply = event.params.maxSupply
  entity.blockNumber = event.block.number
  entity.transactionHash = event.transaction.hash
  entity.save()
}