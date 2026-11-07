// Replace with real clients. Add image to public/media/clients and logo to public/media/logos.
const mk = (name, category, text) => ({
  name, category, text,
  image: `/media/clients/${name.toLowerCase().replace(/\s+/g, '-')}.webp`,
  logo: `/media/logos/${name.toLowerCase().replace(/\s+/g, '-')}.svg`,
})
export const clients = [
  mk('Client One', 'Startup', 'Short description of the client and what you built for them.'),
  mk('Client Two', 'Service business', 'Short description of the client and what you built for them.'),
  mk('Client Three', 'E-commerce', 'Short description of the client and what you built for them.'),
  mk('Client Four', 'Startup', 'Short description of the client and what you built for them.'),
  mk('Client Five', 'Service business', 'Short description of the client and what you built for them.'),
  mk('Client Six', 'E-commerce', 'Short description of the client and what you built for them.'),
]
export const clientNames = clients.map((c) => c.name)
