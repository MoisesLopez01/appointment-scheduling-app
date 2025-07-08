# Appointment Scheduling App

This is a modern, responsive appointment scheduling app built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Public interface for end users to view availability and schedule appointments
- Owner dashboard to manage appointments, employees, payments, and analytics
- API routes for appointment management
- Responsive design for any device
- Simple in-memory data store for demonstration (replace with database in production)

## Project Structure

- `src/app/layout.tsx`: Root layout with global styles and fonts
- `src/app/page.tsx`: Public landing page for end users
- `src/app/owner/page.tsx`: Owner dashboard page
- `src/app/api/appointments/route.ts`: API route for managing appointments
- `src/app/globals.css`: Global Tailwind CSS styles
- `tailwind.config.js`: Tailwind CSS configuration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Future Improvements

- Add user authentication and profiles
- Implement persistent database storage (e.g., PostgreSQL with Prisma)
- Add payment processing integration (e.g., Stripe)
- Expand owner dashboard with employee and payment management
- Add analytics and reporting features

## Contributing

Feel free to fork the project and submit pull requests.

## License

MIT License
