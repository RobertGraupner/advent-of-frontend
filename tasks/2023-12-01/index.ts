

export class GiftRegistry {
  private registry = new Map<number, string[]>();

  addGift(childId: number, gift: string): void {
    const gifts = this.registry.get(childId) || [];
    gifts.push(gift);
    this.registry.set(childId, gifts); 
  }

  removeGift(childId: number, gift: string): void {
    const gifts = this.registry.get(childId);
    if (!gifts) {
      throw new Error('Child not found');
    }

    const giftIndex = gifts.indexOf(gift);
    if (giftIndex === -1) {
      throw new Error('Gift not found');
    }

    gifts.splice(giftIndex, 1);
  }

  getGiftsForChild(childId: number): string[] {
    return this.registry.get(childId) || [];
  }
}