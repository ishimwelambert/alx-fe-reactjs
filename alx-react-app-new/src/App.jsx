import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={30} bio="A passionate developer." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
