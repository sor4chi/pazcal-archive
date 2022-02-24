require 'rails_helper'

RSpec.describe Rank, type: :model do
  it "Is 1000 rank's stamina calculated collectory" do
    rank = Rank.find(1000)
    expect(rank.stamina).to eq(516)
  end

  it "Is 1000 rank's experience calculated collectory" do
    rank = Rank.find(1000)
    expect(rank.experience).to eq(4412261161)
  end

  it "Is 1001 rank's stamina calculated collectory" do
    rank = Rank.find(1001)
    expect(rank.stamina).to eq(517)
  end

  it "Is 1001 rank's experience calculated collectory" do
    rank = Rank.find(1001)
    expect(rank.experience).to eq(4532317786)
  end
end