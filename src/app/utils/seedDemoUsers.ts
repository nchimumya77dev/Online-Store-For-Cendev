// Seed demo users for testing
export function seedDemoUsers() {
  const existingUsers = localStorage.getItem('cendev-users');
  
  if (!existingUsers) {
    const demoUsers = [
      {
        id: 'user-buyer-1',
        email: 'buyer@example.com',
        password: 'password123',
        name: 'John Buyer',
        role: 'buyer',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'user-seller-1',
        email: 'seller@example.com',
        password: 'password123',
        name: 'Jane Seller',
        role: 'seller',
        company: 'Tech Solutions Inc.',
        createdAt: new Date().toISOString(),
      },
    ];
    
    localStorage.setItem('cendev-users', JSON.stringify(demoUsers));
  }
}
