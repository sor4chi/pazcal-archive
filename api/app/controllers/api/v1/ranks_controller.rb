module Api
  module V1
    class RanksController < ApplicationController
      before_action :set_rank, only: [:update]
      
      def index
        @ranks = Rank.all
        render json: @ranks
      end

      def create
        @rank = Rank.new(rank_params)
        if @rank.save
          render json: @rank, status: :created
        else
          render json: @rank.errors, status: :unprocessable_entity
        end
      end

      def update
        if @rank.update(rank_params)
          render json: @rank
        else
          render json: @rank.errors, status: :unprocessable_entity
        end
      end

      private

      def set_rank
        @rank = Rank.find(params[:id])
      end
    end
  end
end
