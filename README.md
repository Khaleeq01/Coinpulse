# CoinPulse 🚀

CoinPulse is a modern, fast, and interactive cryptocurrency tracking web application. Built with Next.js, it provides real-time market data, interactive OHLC charts, and a seamless user experience to help you stay on top of the crypto markets.

## ✨ Features

- **Real-Time Crypto Tracking:** Up-to-date market data, prices, and trends powered by the CoinGecko API.
- **Interactive Charts:** Beautiful and responsive OHLC and line charts built with Lightweight Charts.
- **Global Search (Cmd/Ctrl + K):** Quickly search and navigate to any cryptocurrency with a unified command menu.
- **Modern UI:** A clean, accessible, and highly customizable interface built with Shadcn UI and Tailwind CSS.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI, CMDK, Lucide React)
- **Charts:** [Lightweight Charts](https://tradingview.github.io/lightweight-charts/)
- **Data Provider:** [CoinGecko API](https://www.coingecko.com/en/api)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and `npm`, `yarn`, or `pnpm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Khaleeq01/coinpulse.git
   cd coinpulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of your project and add your CoinGecko API credentials:

   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_coingecko_api_key_here
   NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key_here
   NEXT_PUBLIC_COINGECKO_WEBSITE_URL=wss://stream.coingecko.com/v1
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

- `app/` - Next.js App Router pages, layouts, and API routes.
- `components/` - Reusable UI components including Shadcn UI elements and charts.
- `lib/` - Utility functions and helpers.
- `hooks/` - Custom React hooks for data fetching and state management.
- `public/` - Static assets like images and icons.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/coinpulse/issues) if you want to contribute.

## 📄 License

This project is licensed under the MIT License.
